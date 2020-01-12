import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private username = "";
    private password = "";
    constructor(
        private router: Router,
        private session: SessionService
    ) { }
    ngOnInit() {
    }
    async login() {
        this.session.ajax("http://localhost/homeAccountApi/login.php", {
            username: this.username,
            password: this.password
        }, true).then((data: any) => {
            if (data.status == true) {
                this.session.showAlert(data.msg).then(rs => {
                    this.router.navigateByUrl('/home', { replaceUrl: true });
                });
            } else {
                this.session.showAlert(data.msg);
            }
        }).catch(error => {
            this.session.showAlert(error);
        });
    }
}
