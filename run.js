var sh = require('shelljs');
//build android
var cmd1 = `ionic cordova build android`;
sh.exec(cmd1);
console.log('android build success');

// copy apk to temp download folder
sh.rm('-rf', 'temp-download/android-debug.apk');
sh.cp('-R', 'platforms/android/build/outputs/apk/android-debug.apk', 'temp-download');
console.log('android copy apk success');

//deploy install file
var cmd7 = `scp -r temp-download/** dan@192.168.1.43:/Users/dan/docker/www/temp-download`;
sh.exec(cmd7);
console.log('deploy android success');
// 查看地址
// https://appvantage.lshdan.xyz/temp-download/index.html 

