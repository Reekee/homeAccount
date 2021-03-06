import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionService } from './session/session.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private session: SessionService
    ) {
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(async () => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            let user: any = await this.session.getStorage("user") || {};
            if (user.user_id) {
                this.session.linkTo('/home', false);
            } else {
                this.session.linkTo('/login', false);
            }
        });
    }
    logout() {
        this.session.showConfirm("คุณแน่ใจต้องการออกจากระบบใช่หรือไม่ ?").then(rs => {
            if (rs == true) {
                this.session.removeStorage("user");
                this.session.linkTo('/login', false);
            }
        });
    }
}
