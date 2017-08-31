This is a ionic2 sample for starter.

1. Follow normal ionic document, generate ionic2 project.
    * normal, no problem.
2. Run.
    * Have some issue

#### below is issue resolve
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
npm run build (build android and ios and generate apk and ipa  and delpy to server than can download from link)
```



