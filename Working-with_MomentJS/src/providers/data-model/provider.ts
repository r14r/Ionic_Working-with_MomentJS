import { Injectable }					from '@angular/core';

import { Timer }						from '../../model/timer';
import { Countdown }					from '../../model/countdown';

import * as moment from 'moment';

@Injectable()
export class DataModel {

	private timers: Timer[] = [];
	private countdown: Countdown;

	private globals = {
		minDate: moment([moment().year() - 100]).toObject().years,
		maxDate: moment([moment().year() + 100]).toObject().years
	};

	constructor() {
		console.log('DataModel.constructor:' + this.countdown)
		console.log(this.globals)

		this.timers.push(this.getNewTimer())
		this.timers.push(this.getNewTimer())
		this.timers.push(this.getNewTimer())
	}

	getNewTimer(): Timer {
		console.log('getNewTimer: ' + this.timers)

		var timer = new Timer();

		timer.created = moment().format('LLLL');
		return timer;
	}

	pushTimer(timer: Timer) {
		console.log('pushTimer: ' + this.timers)

		this.timers.push(timer);
	}

	replaceTimer(index: number, timer: Timer): boolean {
		console.log('replaceTimer: ' + this.timers)

		let success = this.timers.splice(index, 1, timer);
		return success.length > 0 ? true : false;
	}

	removeTimer(timerId: number) {
		let success = false;
		let index = this.timers.findIndex((t) => t.id === timerId);

		if (index > -1) {
			success = true;
			this.timers.splice(index, 1);
		}

		return success;
	}

	getTimers(): Timer[] {
		console.log('getTimers: ' + this.timers)
		return this.timers;
	}

	getGlobals(): any {
		console.log('getGlobals: ')
		return this.globals;
	}

	startCountdown(timer: Timer) {
		console.log('startCountdown: ' + timer)
		timer.countdown = this.getCountdownObj(timer.datetime);
	}

	getCountdownObj(utcStr: string): Countdown {
		console.log('getCountdownObj: ' + utcStr)
		return new Countdown(utcStr);
	}

}
