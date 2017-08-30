var sh = require('shelljs');
//build android
var cmd = `ionic cordova build android`;
sh.exec(cmd);
// copy apk to temp download folder
sh.rm('-rf', 'temp-download/android-debug.apk');
sh.cp('-R', 'platforms/android/build/outputs/apk/android-debug.apk', 'temp-download');
var cmd = `scp -r temp-download/** dan@192.168.1.43:/Users/dan/docker/www/temp-download`;
sh.exec(cmd);