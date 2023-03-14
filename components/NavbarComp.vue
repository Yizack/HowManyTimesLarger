<script setup>
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import siteInfo from "../siteInfo";
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg sticky-top bg-body border-bottom">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/"><small><AppIcon class="me-2" :dark="dark" /><b>{{ siteInfo.name }}</b></small></NuxtLink>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Open Navbar">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="offcanvasNavbar" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasDarkNavbarLabel" class="offcanvas-title"><AppIcon class="me-2" :dark="dark" /><b> {{ siteInfo.name }}</b></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav nav-pills ms-auto" role="presentation">
            <!-- Pages -->
            <li v-for="page in siteInfo.pages" :key="page.path" class="nav-item" data-bs-dismiss="offcanvas">
              <NuxtLink class="nav-link rounded-pill px-lg-3 text-center text-uppercase" :to="page.path"><AppIcon v-if="page.icon" class="me-2" :dark="dark" /><b>{{ page.name }}</b></NuxtLink>
            </li>
            <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
              <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-dark-emphasis" />
              <hr class="d-lg-none my-2 text-dark-emphasis">
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 text-center text-uppercase" role="button" aria-label="Change Theme" @click="toggleTheme()"><FontAwesomeIcon :icon="dark ? faMoon : faSun" /><span class="d-lg-none d-inline ms-2"><b>Theme</b></span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data () {
    return {
      dark: siteInfo.dark
    };
  },
  watch: {
    async dark (bool) {
      await UTILS.setDarkMode(bool);
    }
  },
  async mounted () {
    this.dark = await UTILS.isDarkMode();
  },
  methods: {
    toggleTheme () {
      this.dark = !this.dark;
    }
  }
};
</script>

<style scoped>
.navbar .nav-link {
  color: var(--bs-emphasis-color-rgb);
}
.navbar .nav-link:hover {
  color: var(--bs-link-hover-color);
}
.navbar .nav-item .router-link-active, .navbar .nav-item .router-link-exact-active {
  color: var(--bs-white);
  background-color: var(--primary);
  border-color: var(--primary);
}

.navbar .nav-item .router-link-active:hover, .navbar .nav-item .router-link-exact-active:hover {
  color: var(--bs-white);
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
}
</style>
