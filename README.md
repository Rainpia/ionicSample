This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```
### run.js and temp-download folder is customed  for npm run build

### usual cmd
```
ionic serve
ionic cordova platform add ios/android
ionic cordova platform remove ios/android
ionic cordova platform build ios/android
ionic cordova platform run ios/android
npm run build (build android and ios and generate apk and ipa  and delpy to server than can download from link)
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

Substitute ios for android if not on a Mac.

