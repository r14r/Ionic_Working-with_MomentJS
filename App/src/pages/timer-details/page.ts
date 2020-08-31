import { Component }					from '@angular/core';
import { ViewController }				from 'ionic-angular';
import { NavController, NavParams }		from 'ionic-angular';

import { DataModel }					from '../../providers/data-model/provider';

@Component({
	selector: 'page-timer-details',
	templateUrl: 'page.html'
})
export class TimerDetailsPage {
	public timer: any;
	public globals: {};

	constructor(
		public viewCtrl: ViewController,
		public navCtrl: NavController,
		public navParams: NavParams,
		public dataModel: DataModel,
	) {
		this.timer = navParams.get('timer');
		this.globals = this.dataModel.getGlobals();
	}

	closeSettings(save: boolean = false) {
		let timer = save ? this.timer : undefined;
		this.viewCtrl.dismiss(timer);
	}

	removeTimer() {
		let success = this.dataModel.removeTimer(this.timer.id);
		success && this.closeSettings();
	}
}
