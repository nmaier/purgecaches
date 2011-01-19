Components.utils.import("resource://gre/modules/Services.jsm");

function install() {}
function uninstall() {}
function shutdown() {}

function startup() {
	Services.appinfo.invalidateCachesOnRestart();
}
