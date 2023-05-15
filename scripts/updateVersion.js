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
    copy:
      - src: ../assets/android-xml/values-v31/styles.xml
        dest: app/src/main/res/values-v31/styles.xml
`);

console.info("config.yaml created");
