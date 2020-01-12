import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private username = "somchai";
    private password = "1234";
    constructor(
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
                this.session.setStorage("user", data.user);
                this.session.linkTo('/home', false);
            } else {
                this.session.showAlert(data.msg);
            }
        }).catch(error => {
            this.session.showAlert(error);
        });
    }
}
