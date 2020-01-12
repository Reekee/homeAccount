import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    private user: any;
    private sum_income = 0;
    private sum_widthdraw = 0;
    constructor(
        private session: SessionService
    ) { }
    async ngOnInit() {
        this.user = await this.session.getStorage("user");
        this.loadData();
    }
    loadData() {
        this.session.ajax("http://localhost/homeAccountApi/home-get.php", {
            user_id: this.user.user_id,
        }, true).then((data: any) => {
            if (data.status) {
                this.sum_income = data.sum_income;
                this.sum_widthdraw = data.sum_widthdraw;
            } else {
                this.session.showAlert(data.msg);
            }
        }).catch(error => {
            this.session.showAlert(error);
        });
    }
}
