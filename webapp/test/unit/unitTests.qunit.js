/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"progress_pad/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
