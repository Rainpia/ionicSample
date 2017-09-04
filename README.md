## This is a ionic2 sample for starter.

1. Follow normal ionic document, generate ionic2 project.
    * normal, no problem.
2. Run.
    * Have some issue, below "issue resolve" is detail.
3. Deploy
    * android apk generate (platforms/android/build/outputs/apk/android-debug.apk)

    ```
    ionic cordova platform build android
    ```
    * ios ipa generate (temp-download/ionicSample.ipa)

    ```
    //generate archive file first
    xcodebuild -scheme ionicSample clean archive -archivePath platforms/ios/build/ionicSample
    //then generate .ipa and .plist
    xcodebuild -exportArchive ipa -archivePath "platforms/ios/build/ionicSample.xcarchive" -exportPath "temp-download/ionicSample.ipa" -exportOptionsPlist "temp-download/manifest.plist"
    ```
    * temp-download folder is for download link to store install file.

### usual cmd
```
ionic serve
ionic cordova platform add ios/android
ionic cordova platform remove ios/android
ionic cordova platform build ios/android
ionic cordova platform run ios/android
npm run build (build android and generate apk, and delpy to server than can download from link)
```

### issue resolve
* Before add platform, need to change config.xml about id and name
* 'ios cordova run ios' will show error like "replace is undefined", 
    - change /platforms/ios/cordova/node_modules/ios-sim/src/lib.js:282

```
list = [];
        var remove = function(runtime) {
            // remove "iOS" prefix in runtime, remove prefix "com.apple.CoreSimulator.SimDeviceType." in id
            list.push(util.format('%s, %s', name_id_map[ deviceName ].replace(/^com.apple.CoreSimulator.SimDeviceType./, ''), runtime.replace(/^iOS /, '')));
        };
```
to
```
list = [];
        var remove = function(runtime) {
            // remove "iOS" prefix in runtime, remove prefix "com.apple.CoreSimulator.SimDeviceType." in id
            if (name_id_map[deviceName] && runtime) {
                list.push(util.format('%s, %s', name_id_map[deviceName].replace(/^com.apple.CoreSimulator.SimDeviceType./, ''), runtime.replace(/^iOS /, '')));
            }
        };
```
* set default simulte for ;
    - /platforms/ios/cordova/lib/run.js
```
    emulators.forEach(function (emulator) {
                if (emulator.indexOf('iPhone-7') === 0) {
                    target = emulator;
                }
            });
```
### Deploy android
```
1. ionic cordova build android
2. rm -rf temp-download/android-debug.apk
3. cp -R platforms/android/build/outputs/apk/android-debug.apk temp-download
4. scp -r temp-download/** dan@192.168.1.43:/Users/dan/docker/www/temp-download
```
### Deploy IOS
```
1. ionic cordova build ios
2. cd platforms/ios
3. xcodebuild -scheme ionicSample clean archive -archivePath build/ionicSample
4. xcodebuild -exportArchive ipa -archivePath "build/ionicSample.xcarchive" -exportPath "../../temp-download/ionicSample.ipa" -exportOptionsPlist "../../temp-download/manifest.plist"
5. cd ..
6. cd ..
7. scp -r temp-download/** dan@192.168.1.43:/Users/dan/docker/www/temp-download
```



