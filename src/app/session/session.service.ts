import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    constructor(
        private alertController: AlertController,
        private loadingController: LoadingController,
        private http: HttpClient,
    ) { }
    public async showAlert(msg) {
        return new Promise(async resolve => {
            const alert = await this.alertController.create({
                header: 'แจ้งข้อความ',
                message: msg,
                buttons: [
                    {
                        text: 'ตกลง',
                        handler: () => {
                            resolve(true);
                        }
                    }
                ]
            });
            await alert.present();
        });
    }
    public async ajax(url, data, isLoading = true) {
        return new Promise(async (resolve, reject) => {
            let loading: any;
            if (isLoading == true) {
                loading = await this.loadingController.create({
                    message: 'กำลังประมวลผล'
                });
                await loading.present();
            }
            this.http.post(url, JSON.stringify(data), { responseType: "text" })
                .pipe(timeout(5000))
                .subscribe(async res => {
                    if (isLoading == true) { await loading.dismiss(); }
                    try {
                        let data: any = JSON.parse(res);
                        resolve(data);
                    } catch (e) {
                        reject(data);
                    }
                }, async error => {
                    if (isLoading == true) { await loading.dismiss(); }
                    reject("ติดต่อเครื่องแม่ข่ายไม่ได้");
                });
        });
    }
}
