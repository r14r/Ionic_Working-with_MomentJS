import * as moment from 'moment';

import { Countdown }					from './countdown';

export class Timer {
	id: number = Math.floor(Math.random() * 1000000);
	title: string = 'Timer';
	description: string = '';
	datetime = moment().format();
	created = moment().format();
	countdown: Countdown = new Countdown(moment().format());
	years: number = 0;
	weeks: number = 0;
	days: number = 0;
	hours: number = 0;
	minutes: number = 0;
	seconds: number = 0;


	start() {
		
	};
	stop() {

	};

}
