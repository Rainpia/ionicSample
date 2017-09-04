var sh = require('shelljs');
//build android
var cmd1 = `ionic cordova build android`;
sh.exec(cmd1);
console.log('android build success');

// copy apk to temp download folder
sh.rm('-rf', 'temp-download/android-debug.apk');
sh.cp('-R', 'platforms/android/build/outputs/apk/android-debug.apk', 'temp-download');
console.log('android copy apk success');

//build ios
sh.rm('-rf', 'platforms/ios/build');
var cmd2 = `ionic cordova build ios`;
sh.exec(cmd2);
console.log('ios build success');


sh.rm('-rf', 'temp-download/ionicSample.ipa/ionicSample.ipa');
// build ios to archive
var cmd3 =  `xcodebuild -scheme ionicSample clean archive -archivePath platforms/ios/build/ionicSample`;
// generate ipa from archive
var cmd4 =  `xcodebuild -exportArchive ipa -archivePath "platforms/ios/build/ionicSample.xcarchive" -exportPath "temp-download/ionicSample.ipa" -exportOptionsPlist "temp-download/manifest.plist"`;
sh.exec(cmd3);
console.log('ios generate archive success');
sh.exec(cmd4);
console.log('ios generate ipa success');

//deploy install file
var cmd5 = `ssh dan@192.168.1.43 "rm -f /Users/dan/docker/www/temp-download"`;
var cmd6 = `ssh dan@192.168.1.43 "mkdir -p /Users/dan/docker/www/temp-download"`;
var cmd7 = `scp -r temp-download/** dan@192.168.1.43:/Users/dan/docker/www/temp-download`;
sh.exec(cmd5);
sh.exec(cmd6);
sh.exec(cmd7);
console.log('deploy success');
// 查看地址
// https://appvantage.lshdan.xyz/temp-download/index.html 

