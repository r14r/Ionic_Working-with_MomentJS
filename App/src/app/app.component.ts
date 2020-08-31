import { Component, ViewChild } 		from '@angular/core';

import { Nav, Platform } 				from 'ionic-angular';
import { SplashScreen } 				from '@ionic-native/splash-screen';
import { StatusBar } 					from '@ionic-native/status-bar';

import { TimerListPage } 				from '../pages/timer-list/page';
import { SamplesPage }					from '../pages/samples/page';

@Component({
	templateUrl: 'app.html'
})
export class MainApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = SamplesPage;

	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Übersicht', component: TimerListPage },
			{ title: 'Beispiele', component: SamplesPage }
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}

