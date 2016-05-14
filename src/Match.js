'use strict';

import core from 'metal';
import {dom} from 'metal-dom';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Match as MatchModel} from 'zsfootball-models';
import templates from './Match.soy';

class Match extends Component  {
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
