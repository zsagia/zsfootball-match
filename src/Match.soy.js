/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
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
      break;
    case 2:
      $renderSimpleView_(opt_data, null, opt_ijData);
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
    var goals__soy19 = opt_data.match.goals;
    ie_open('tr', null, null,
        'class', 'zsfootball-match-row');
      ie_open('td', null, null,
          'class', 'match-date');
        itext((goog.asserts.assert((opt_data.localHourMinute) != null), opt_data.localHourMinute));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'home-club');
        itext((goog.asserts.assert((opt_data.match.homeClub.title) != null), opt_data.match.homeClub.title));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'result');
        ie_open('span');
          itext((goog.asserts.assert((goals__soy19.homeGoals.firstHalf.length + goals__soy19.homeGoals.secondHalf.length) != null), goals__soy19.homeGoals.firstHalf.length + goals__soy19.homeGoals.secondHalf.length));
          itext(' - ');
          itext((goog.asserts.assert((goals__soy19.awayGoals.firstHalf.length + goals__soy19.awayGoals.secondHalf.length) != null), goals__soy19.awayGoals.firstHalf.length + goals__soy19.awayGoals.secondHalf.length));
        ie_close('span');
      ie_close('td');
      ie_open('td', null, null,
          'class', 'away-club');
        itext((goog.asserts.assert((opt_data.match.awayClub.title) != null), opt_data.match.awayClub.title));
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
function $renderSimpleView_(opt_data, opt_ignored, opt_ijData) {
  ie_open('table', null, null,
      'class', 'zsfootball-match' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    var goals__soy41 = opt_data.match.goals;
    ie_open('tr', null, null,
        'class', 'zsfootball-match-row');
      ie_open('td', null, null,
          'class', 'home-club');
        itext((goog.asserts.assert((opt_data.match.homeClub.title) != null), opt_data.match.homeClub.title));
      ie_close('td');
      ie_open('td', null, null,
          'class', 'result');
        ie_open('span');
          if (goals__soy41) {
            itext((goog.asserts.assert((goals__soy41.homeGoals.firstHalf + goals__soy41.homeGoals.secondHalf) != null), goals__soy41.homeGoals.firstHalf + goals__soy41.homeGoals.secondHalf));
          }
          itext('-');
          if (goals__soy41) {
            itext((goog.asserts.assert((goals__soy41.awayGoals.firstHalf + goals__soy41.awayGoals.secondHalf) != null), goals__soy41.awayGoals.firstHalf + goals__soy41.awayGoals.secondHalf));
          }
        ie_close('span');
      ie_close('td');
      ie_open('td', null, null,
          'class', 'away-club');
        itext((goog.asserts.assert((opt_data.match.awayClub.title) != null), opt_data.match.awayClub.title));
      ie_close('td');
    ie_close('tr');
  ie_close('table');
}
exports.renderSimpleView_ = $renderSimpleView_;
if (goog.DEBUG) {
  $renderSimpleView_.soyTemplateName = 'Match.renderSimpleView_';
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
    ie_open('tr', null, null,
        'class', 'header');
      ie_open('td', null, null,
          'colspan', '4');
        ie_open('table');
          ie_open('tr');
            ie_open('td', null, null,
                'class', 'date');
              itext((goog.asserts.assert((opt_data.localeDate) != null), opt_data.localeDate));
            ie_close('td');
            ie_open('td', null, null,
                'class', 'referee');
              itext((goog.asserts.assert((opt_data.match.referee) != null), opt_data.match.referee));
            ie_close('td');
            ie_open('td', null, null,
                'class', 'attendance');
              itext('Attendance: ');
              itext((goog.asserts.assert((opt_data.match.attendance) != null), opt_data.match.attendance));
            ie_close('td');
            ie_open('td', null, null,
                'class', 'location');
              itext((goog.asserts.assert((opt_data.match.location.city) != null), opt_data.match.location.city));
            ie_close('td');
          ie_close('tr');
        ie_close('table');
      ie_close('td');
    ie_close('tr');
    var goals__soy65 = opt_data.match.goals;
    ie_open('tr', null, null,
        'class', 'first-half half');
      ie_open('td', null, null,
          'colspan', '5');
        itext('1. half');
      ie_close('td');
    ie_close('tr');
    $renderGoals_({halfGoals: opt_data.match.firstHalfGoals, homeGoals: goals__soy65.homeGoals.firstHalf.length, awayGoals: goals__soy65.awayGoals.firstHalf.length}, null, opt_ijData);
    ie_open('tr', null, null,
        'class', 'second-half half');
      ie_open('td', null, null,
          'colspan', '5');
        itext('2. half');
      ie_close('td');
    ie_close('tr');
    $renderGoals_({halfGoals: opt_data.match.secondHalfGoals, homeGoals: goals__soy65.homeGoals.secondHalf.length, awayGoals: goals__soy65.awayGoals.secondHalf.length}, null, opt_ijData);
  ie_close('table');
}
exports.renderDetails_ = $renderDetails_;
if (goog.DEBUG) {
  $renderDetails_.soyTemplateName = 'Match.renderDetails_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderGoals_(opt_data, opt_ignored, opt_ijData) {
  var rowLength__soy78 = opt_data.halfGoals.length;
  if (opt_data.halfGoals.length == 0) {
    $renderGoal_({columnIndex: 0, homeGoals: 0, awayGoals: 0, rowLength: rowLength__soy78}, null, opt_ijData);
  }
  var goalList93 = opt_data.halfGoals;
  var goalListLen93 = goalList93.length;
  for (var goalIndex93 = 0; goalIndex93 < goalListLen93; goalIndex93++) {
    var goalData93 = goalList93[goalIndex93];
    var columnIndex__soy86 = goalIndex93;
    $renderGoal_({columnIndex: columnIndex__soy86, goal: goalData93, homeGoals: opt_data.homeGoals, awayGoals: opt_data.awayGoals, rowLength: rowLength__soy78}, null, opt_ijData);
  }
}
exports.renderGoals_ = $renderGoals_;
if (goog.DEBUG) {
  $renderGoals_.soyTemplateName = 'Match.renderGoals_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderGoal_(opt_data, opt_ignored, opt_ijData) {
  ie_open('tr', null, null,
      'class', 'goals');
    ie_open('td', null, null,
        'class', 'home-goal-scoorer',
        'colspan', '2');
      if (opt_data.homeGoals > 0 && opt_data.goal.goalType == 'homeGoal') {
        itext((goog.asserts.assert((opt_data.goal.time) != null), opt_data.goal.time));
        itext('\' ');
        itext((goog.asserts.assert((opt_data.goal.player.fullName) != null), opt_data.goal.player.fullName));
      }
    ie_close('td');
    if (opt_data.columnIndex == 0) {
      ie_open('td', null, null,
          'class', 'result',
          'rowspan', opt_data.rowLength);
        itext((goog.asserts.assert((opt_data.homeGoals) != null), opt_data.homeGoals));
        itext(' - ');
        itext((goog.asserts.assert((opt_data.awayGoals) != null), opt_data.awayGoals));
        itext(' ');
      ie_close('td');
    }
    ie_open('td', null, null,
        'class', 'away-goal-scoorer',
        'colspan', '2');
      if (opt_data.awayGoals > 0 && opt_data.goal.goalType == 'awayGoal') {
        itext((goog.asserts.assert((opt_data.goal.time) != null), opt_data.goal.time));
        itext('\' ');
        itext((goog.asserts.assert((opt_data.goal.player.fullName) != null), opt_data.goal.player.fullName));
      }
    ie_close('td');
  ie_close('tr');
}
exports.renderGoal_ = $renderGoal_;
if (goog.DEBUG) {
  $renderGoal_.soyTemplateName = 'Match.renderGoal_';
}

exports.render.params = ["match","localeDate","localHourMinute","viewType","elementClasses"];
exports.render.types = {"match":"any","localeDate":"any","localHourMinute":"any","viewType":"any","elementClasses":"any"};
exports.renderRowView_.params = ["elementClasses","localeDate","localHourMinute","match"];
exports.renderRowView_.types = {"elementClasses":"any","localeDate":"any","localHourMinute":"any","match":"any"};
exports.renderSimpleView_.params = ["elementClasses","match"];
exports.renderSimpleView_.types = {"elementClasses":"any","match":"any"};
exports.renderDetails_.params = ["localeDate","match"];
exports.renderDetails_.types = {"localeDate":"any","match":"any"};
exports.renderGoals_.params = ["halfGoals","awayGoals","homeGoals"];
exports.renderGoals_.types = {"halfGoals":"any","awayGoals":"any","homeGoals":"any"};
exports.renderGoal_.params = ["columnIndex","goal","homeGoals","awayGoals","rowLength"];
exports.renderGoal_.types = {"columnIndex":"any","goal":"any","homeGoals":"any","awayGoals":"any","rowLength":"any"};
templates = exports;
return exports;

});

class Match extends Component {}
Soy.register(Match, templates);
export { Match, templates };
export default templates;
/* jshint ignore:end */
