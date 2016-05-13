/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ZsFootballMatch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ZsFootballMatch.
 * @public
 */

goog.module('ZsFootballMatch.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  switch ((goog.isObject($$temp = opt_data.viewType)) ? $$temp.toString() : $$temp) {
    case 0:
      $renderRowView_(opt_data, null, opt_ijData);
      break;
    case 1:
      $renderRowView_(opt_data, null, opt_ijData);
      break;
  }
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ZsFootballMatch.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderRowView_(opt_data, opt_ignored, opt_ijData) {
  ie_open('table', null, null,
      'class', 'zsfootball-match' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''),
      'data-onclick', 'onRowClickHandler');
    ie_open('tr', null, null,
        'class', 'zsfootball-match-row');
      ie_open('td', null, null,
          'class', 'match-date');
        itext((goog.asserts.assert((opt_data.match.localHourMinute) != null), opt_data.match.localHourMinute));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'home-club');
        itext((goog.asserts.assert((opt_data.match.homeClub) != null), opt_data.match.homeClub));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'result');
        itext((goog.asserts.assert((opt_data.match.homeGoals) != null), opt_data.match.homeGoals));
        itext(' - ');
        itext((goog.asserts.assert((opt_data.match.awayGoals) != null), opt_data.match.awayGoals));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'away-club');
        itext((goog.asserts.assert((opt_data.match.awayClub) != null), opt_data.match.awayClub));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'attendance');
        itext((goog.asserts.assert((opt_data.match.attendance) != null), opt_data.match.attendance));
      ie_close('td');
    ie_close('tr');
    ie_open('tr', null, null,
        'class', 'zsfootball-match-details hide');
      ie_open('table');
        ie_open('tr');
          ie_open('td');
            itext('g1');
          ie_close('td');
          ie_open('td');
            itext('g2');
          ie_close('td');
        ie_close('tr');
      ie_close('table');
    ie_close('tr');
  ie_close('table');
}
exports.renderRowView_ = $renderRowView_;
if (goog.DEBUG) {
  $renderRowView_.soyTemplateName = 'ZsFootballMatch.renderRowView_';
}

exports.render.params = ["match","viewType","elementClasses"];
exports.render.types = {"match":"any","viewType":"any","elementClasses":"any"};
exports.renderRowView_.params = ["elementClasses","match"];
exports.renderRowView_.types = {"elementClasses":"any","match":"any"};
templates = exports;
return exports;

});

class ZsFootballMatch extends Component {}
Soy.register(ZsFootballMatch, templates);
export { ZsFootballMatch, templates };
export default templates;
/* jshint ignore:end */
