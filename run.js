var sh = require('shelljs');
//build android
var cmd1 = `ionic cordova build android`;
sh.exec(cmd1);
//build ios
var cmd2 = `ionic cordova build ios`;
sh.exec(cmd2);
// copy apk to temp download folder
sh.rm('-rf', 'temp-download/android-debug.apk');
sh.cp('-R', 'platforms/android/build/outputs/apk/android-debug.apk', 'temp-download');

sh.rm('-rf', 'temp-download/ionicSample.apk');
// build ios to archive
var cmd3 =  `xcodebuild -scheme ionicSample clean archive -archivePath platforms/ios/build/ionicSample`;
// generate ipa from archive
var cmd4 =  `xcodebuild -exportArchive ipa -archivePath "platforms/ios/build/ionicSample.xcarchive" -exportPath "temp-download/ionicSample.ipa" -exportOptionsPlist "temp-download/manifest.plist"`;
sh.exec(cmd3);
sh.exec(cmd4);

//deploy install file
var cmd5 = `scp -r temp-download/** dan@192.168.1.43:/Users/dan/docker/www/temp-download`;
sh.exec(cmd5);

