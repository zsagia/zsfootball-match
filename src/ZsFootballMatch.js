'use strict';

import core from 'metal';
import {dom} from 'metal-dom';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Match} from 'zsfootball-models';
import templates from './ZsFootballMatch.soy';

class ZsFootballMatch extends Component  {
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
	 	return new Match(value);
	}
}
Soy.register(ZsFootballMatch, templates);

ZsFootballMatch.STATE = {
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

ZsFootballMatch.VIEW_TYPE = {
	tableView: 0,
	rowView: 1
}

export default ZsFootballMatch;
