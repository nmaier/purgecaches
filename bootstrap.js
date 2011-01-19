const PREF_XULCACHE = "nglayout.debug.disable_xul_cache";

Components.utils.import("resource://gre/modules/Services.jsm");

function install() {}
function uninstall() {}

function startup() {
	Services.appinfo.invalidateCachesOnRestart();
	Services.prefs.setBoolPref(PREF_XULCACHE, true);
	Components.utils.reportError("Purge Caches: going to purge caches when you restart!");
}
function shutdown() {
	try {
		Services.prefs.clearUserPref(PREF_XULCACHE);
	}
	catch (ex) {
		// no op
	}
}
