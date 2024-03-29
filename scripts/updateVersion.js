import { writeFileSync } from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const packageJson = require("../package.json");

const generateVersionCode = (version) => {
  const [major, minor, patch] = version.split(".");
  return parseInt(major) * 1000000 + parseInt(minor) * 1000 + parseInt(patch);
};

writeFileSync("config.yaml", `platforms:
  android:
    versionName: ${packageJson.version}
    versionCode: ${generateVersionCode(packageJson.version)}
    gradle:
      - file: app/build.gradle
        target:
            android:
              buildTypes:
                release:
                  minifyEnabled:
        replace:
          minifyEnabled: true
      - file: app/build.gradle
        target:
              android:
                buildTypes:
                  release:
        insert: |
          shrinkResources true
    xml:
      - file: app/src/main/res/values/styles.xml
        target: resources/style[@name="AppTheme.NoActionBarLaunch"]
        replace: |
          <style name="AppTheme.NoActionBarLaunch" parent="AppTheme.NoActionBar">
            <item name="android:background">#121518</item>
            <item name="android:windowActionBar">false</item>
            <item name="android:windowFullscreen">true</item>
            <item name="android:windowContentOverlay">@null</item>
            <item name="android:windowIsTranslucent">true</item>
          </style>
    copy:
      - src: ../assets/android/drawable-v23/launch_screen.xml
        dest: app/src/main/res/drawable-v23/launch_screen.xml
      - src: ../assets/android/values-v31/styles.xml
        dest: app/src/main/res/values-v31/styles.xml
      - src: ../assets/android/proguard-rules.pro
        dest: app/proguard-rules.pro
`);

console.info("config.yaml created");
