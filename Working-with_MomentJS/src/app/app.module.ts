import { BrowserModule } 				from '@angular/platform-browser';
import { ErrorHandler, NgModule }		from '@angular/core';
import { IonicApp, IonicModule }		from 'ionic-angular';
import { IonicErrorHandler }			from 'ionic-angular';

import { StatusBar }					from '@ionic-native/status-bar';
import { SplashScreen }					from '@ionic-native/splash-screen';


import { MainApp }						from './app.component';

import { TimerListPage }				from '../pages/timer-list/page';
import { TimerDetailsPage }				from '../pages/timer-details/page';
import { SamplesPage }					from '../pages/samples/page';


import { DataModel }					from '../providers/data-model/provider';

@NgModule({
	declarations: [MainApp, TimerListPage, TimerDetailsPage, SamplesPage],
	imports: [BrowserModule, IonicModule.forRoot(MainApp),],
	bootstrap: [IonicApp],
	entryComponents: [MainApp, TimerListPage, TimerDetailsPage, SamplesPage],
	providers: [ DataModel, StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
