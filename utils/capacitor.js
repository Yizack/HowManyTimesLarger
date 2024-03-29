import { App } from "@capacitor/app";
import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";

class CapacitorPlugins {
  async setStatusBar (isDark) {
    if (Capacitor.getPlatform() === "android" && Capacitor.isPluginAvailable("StatusBar")) {
      const { dark, light } = siteInfo.colors;
      await StatusBar.setStyle({ style: isDark ? Style.Dark : Style.Light });
      await StatusBar.setBackgroundColor({ color: isDark ? dark.body : light.body });
    }
  }

  isNative () {
    return Capacitor.isNativePlatform();
  }

  isAndroid () {
    return Capacitor.getPlatform() === "android";
  }

  async setPref (name, value) {
    await Preferences.set({ key: name, value: JSON.stringify(value) });
  }

  async getPref (name) {
    const { value } = await Preferences.get({ key: name });
    return JSON.parse(value);
  }

  async removePref (name) {
    await Preferences.remove({ key: name });
  }

  exit () {
    App.exitApp();
  }

  onBack (callback = () => {}) {
    App.addListener("backButton", ({ canGoBack }) => callback(canGoBack));
  }
}

export const CAPACITOR = new CapacitorPlugins();
