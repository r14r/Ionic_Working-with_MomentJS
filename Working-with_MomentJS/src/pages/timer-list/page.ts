import { Component, ViewChild } 		from '@angular/core';
import { NavController, Nav }			from 'ionic-angular';
import { MenuController }				from 'ionic-angular';

import { DataModel }					from '../../providers/data-model/provider';
import { Timer }						from '../../model/timer';
import { TimerDetailsPage }				from '../timer-details/page';

@Component({
	selector: 'page-home',
	templateUrl: 'page.html'
})
export class TimerListPage {
	@ViewChild(Nav) nav: Nav;

	public timers: Timer[] = [];

	constructor(
		public navCtrl: NavController,
		public menu: MenuController,
		private dataModel: DataModel
	) {
		console.log('HomePage.constructor');

		this.timers = this.dataModel.getTimers();
		console.log('timers: ' + this.timers)
	}

	itemTapped(event, timer) {
		console.log('itemTapped: timer=' + timer + ', event=' + event)

		if (timer == null) {
			timer = this.dataModel.getNewTimer()
			timer.description = "Neuer Timer"
			this.timers.push(timer)
		}

		this.navCtrl.push(TimerDetailsPage, {
			timer: timer
		});
	  }
}
