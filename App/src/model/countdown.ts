
import * as moment from 'moment';

export class Countdown {

	years: number = 0;
	weeks: number = 0;
	months: number = 0;
	hours: number = 0;
	minutes: number = 0;
	seconds: number = 0;

	constructor(datetime: string) {
		console.log('Countdown.constructor');

		if (moment.isMoment(datetime)) {
			this.resetCountdown();
		}
	}

	resetCountdown() {
		this.years = 0;
		this.weeks = 0;
		this.months = 0;
		this.hours = 0;
		this.minutes = 0;
		this.seconds = 0;
	}

	start() {

	}

	stop() {

	}
}

