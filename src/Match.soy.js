/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Match.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Match.
 * @public
 */

goog.module('Match.incrementaldom');

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
  $render.soyTemplateName = 'Match.render';
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
    var goals__soy18 = opt_data.match.goals;
    ie_open('tr', null, null,
        'class', 'zsfootball-match-row');
      ie_open('td', null, null,
          'class', 'match-date');
        itext((goog.asserts.assert((opt_data.localHourMinute) != null), opt_data.localHourMinute));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'home-club');
        itext((goog.asserts.assert((opt_data.match.homeClub) != null), opt_data.match.homeClub));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'result');
        itext((goog.asserts.assert((goals__soy18.homeGoals.firstHalf.length + goals__soy18.homeGoals.secondHalf.length) != null), goals__soy18.homeGoals.firstHalf.length + goals__soy18.homeGoals.secondHalf.length));
        itext(' - ');
        itext((goog.asserts.assert((goals__soy18.awayGoals.firstHalf.length + goals__soy18.awayGoals.secondHalf.length) != null), goals__soy18.awayGoals.firstHalf.length + goals__soy18.awayGoals.secondHalf.length));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'away-club');
        itext((goog.asserts.assert((opt_data.match.awayClub) != null), opt_data.match.awayClub));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'location');
        itext((goog.asserts.assert((opt_data.match.location.name) != null), opt_data.match.location.name));
      ie_close('td');
    ie_close('tr');
    ie_open('tr', null, null,
        'class', 'zsfootball-match-details hide');
      ie_open('td', null, null,
          'colspan', '5');
        $renderDetails_(opt_data, null, opt_ijData);
      ie_close('td');
    ie_close('tr');
  ie_close('table');
}
exports.renderRowView_ = $renderRowView_;
if (goog.DEBUG) {
  $renderRowView_.soyTemplateName = 'Match.renderRowView_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderDetails_(opt_data, opt_ignored, opt_ijData) {
  ie_open('table');
    var goals__soy37 = opt_data.match.goals;
    ie_open('tr', null, null,
        'class', 'first-half');
      ie_open('td', null, null,
          'class', 'first-half',
          'colspan', '3');
        itext('1. half');
      ie_close('td');
    ie_close('tr');
    ie_open('tr', null, null,
        'class', 'first-half');
      ie_open('td', null, null,
          'class', 'first-half');
        itext((goog.asserts.assert((goals__soy37.homeGoals.firstHalf.length) != null), goals__soy37.homeGoals.firstHalf.length));
        itext(' - ');
        itext((goog.asserts.assert((goals__soy37.awayGoals.firstHalf.length) != null), goals__soy37.awayGoals.firstHalf.length));
      ie_close('td');
    ie_close('tr');
    ie_open('tr', null, null,
        'class', 'first-half',
        'colspan', '3');
      ie_open('td', null, null,
          'class', 'first-half');
        itext('2. half');
      ie_close('td');
    ie_close('tr');
    ie_open('tr', null, null,
        'class', 'second-half');
      ie_open('td', null, null,
          'class', 'first-half');
        itext((goog.asserts.assert((goals__soy37.homeGoals.secondHalf.length) != null), goals__soy37.homeGoals.secondHalf.length));
        itext(' - ');
        itext((goog.asserts.assert((goals__soy37.awayGoals.secondHalf.length) != null), goals__soy37.awayGoals.secondHalf.length));
      ie_close('td');
    ie_close('tr');
  ie_close('table');
}
exports.renderDetails_ = $renderDetails_;
if (goog.DEBUG) {
  $renderDetails_.soyTemplateName = 'Match.renderDetails_';
}

exports.render.params = ["match","localHourMinute","viewType","elementClasses"];
exports.render.types = {"match":"any","localHourMinute":"any","viewType":"any","elementClasses":"any"};
exports.renderRowView_.params = ["elementClasses","localHourMinute","match"];
exports.renderRowView_.types = {"elementClasses":"any","localHourMinute":"any","match":"any"};
exports.renderDetails_.params = ["match"];
exports.renderDetails_.types = {"match":"any"};
templates = exports;
return exports;

});

class Match extends Component {}
Soy.register(Match, templates);
export { Match, templates };
export default templates;
/* jshint ignore:end */
