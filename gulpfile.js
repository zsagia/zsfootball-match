'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'zsFootballMatch.css',
	bundleFileName: 'zsFootballMatch.js',
	moduleName: 'metal-zsFootballMatch',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
