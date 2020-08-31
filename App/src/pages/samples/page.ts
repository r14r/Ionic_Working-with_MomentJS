import { Component }					from '@angular/core';
import { NavParams }					from 'ionic-angular';

import { DataModel } 					from '../../providers/data-model/provider';
import { Timer }						from '../../model/timer';

import * as moment from 'moment';

@Component({
	selector: 'page-samples',
	templateUrl: 'page.html'
})
export class SamplesPage {

	public timer: Timer;
	public globals: {};

	public samples: any[] = [];

	constructor(
		public dataModel: DataModel,
		public navParams: NavParams
	) {
		this.timer = dataModel.getNewTimer();
		this.globals = this.dataModel.getGlobals();

		this.samples = [
			{
				key: "Zeit erstellen",
				code: [
					{ desc: "Aktuelle Zeit:", key:"moment().format('LLLL')", val: moment().format('LLLL') },
					{ key: 'moment(new Date(2011, 9, 16))', val: moment(new Date(2011, 9, 16)) },
					{ key: 'moment([2010, 1, 14, 15, 25, 50, 125])', val: moment([2010, 1, 14, 15, 25, 50, 125]) },
					{ desc: 'von UNIX Timestamp', key: 'moment.unix(1318781876)', val: moment.unix(1318781876) }
				]
			},
			{
				key: "Zeit auslesen",
				code: [
					{ key: 'moment("2013-02-08 09:30:25").seconds().valueOf()', val: moment('2013-02-08 09:30:25').seconds().valueOf() },
					{ key: 'moment("2013-02-08 09:30:25").minutes().valueOf()', val: moment('2013-02-08 09:30:25').minutes().valueOf() }
				]
			},
			{
				key: "Formatierung",
				code: [
					{ key: "moment('1995-12-25')", val: moment("1995-12-25") },
					{ key: "moment('2013-02-08 09:30:26.123+07:00')", val: moment('2013-02-08 09:30:26.123+07:00') },
					{ key: "moment('6 Mar 2017 21:22:23 GMT')", val: moment('6 Mar 2017 21:22:23 GMT') }
				]
			},
			{
				key: "Formatierung mit Formatangabe",
				code: [
					{ key: 'moment("12-25-1995", "MM-DD-YYYY")', val: moment("12-25-1995", "MM-DD-YYYY") }
				]
			},
			{
				key: "Formatierung mit Einleseformat",
				code: [
					{ key: 'moment("12/25/1995", "MM/DD/YYYY")', val: moment("12/25/1995", "MM/DD/YYYY") }
				]
			}
		]

		console.log("samples: " + this.samples)
	}
}
