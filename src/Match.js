'use strict';

import core from 'metal';
import {dom} from 'metal-dom';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {MatchModel} from 'zsfootball-models';
import templates from './Match.soy';

class Match extends Component  {
	/**
	 * Based on match date calculates a date string
	 */
	getLocalHourMinute_() {
		return (new Date(this.match.matchDate)).toLocaleTimeString();
	}

	toLocaleDateString_() {
		return (new Date(this.match.matchDate)).toLocaleDateString();
	}

	/**
	 *
	 */
	onRowClickHandler(event) {
		var row = event.delegateTarget;

		dom.toggleClasses(row, 'selected');
		dom.toggleClasses(row.children[1], 'hide');
	}

	/**
	 *
	 */
	setMatch_(value) {
	 	return new MatchModel(value);
	}
}
Soy.register(Match, templates);

Match.STATE = {
	localeDate: {
		valueFn: 'toLocaleDateString_'
	},

	/**
	 * It is a helper state for 'getLocalHourMinute_' method
	 * @type {function()}
	 */
	localHourMinute: {
		valueFn: 'getLocalHourMinute_'
	},

	/**
	 *
	 */
	match: {
		setter: 'setMatch_'
	},

	/**
	 *
	 */
	viewType: {
		value: 1
	}
}

Match.VIEW_TYPE = {
	tableView: 0,
	rowView: 1
}

export default Match;
