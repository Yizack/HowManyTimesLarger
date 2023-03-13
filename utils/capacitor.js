import { StatusBar, Style } from "@capacitor/status-bar";
import { Capacitor } from "@capacitor/core";

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
}

export const CAPACITOR = new CapacitorPlugins();
