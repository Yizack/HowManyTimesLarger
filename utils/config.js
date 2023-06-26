class Config {
  constructor (config) {
    this.config = config;
  }

  async load () {
    const dark = await CAPACITOR.getPref("dark") || this.config.dark;
    await this.setDark(dark);
  }

  get dark () {
    return this.config.dark;
  }

  async setDark (dark) {
    this.config.dark = dark;
    useHead({ bodyAttrs: { "data-bs-theme": dark ? "dark" : "light" } });
    await CAPACITOR.setPref("dark", dark);
  }
}

export const CONFIG = new Config({ dark: true });
