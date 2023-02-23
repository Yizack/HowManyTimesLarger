<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import siteInfo from "~/siteInfo.js";
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg px-3 sticky-top fixed bg-body border-bottom">
    <div class="container">
      <NuxtLink class="navbar-brand" to="/">{{ siteInfo.name }}</NuxtLink>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="offcanvasNavbar" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasDarkNavbarLabel" class="offcanvas-title">{{ siteInfo.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav nav-pills ms-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link rounded-pill px-lg-3 text-center text-uppercase" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link rounded-pill px-lg-3 text-center text-uppercase" href="/countries/">Countries</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link rounded-pill px-lg-3 text-center text-uppercase" href="/game/">Game</NuxtLink>
            </li>
            <li class="nav-item py-2 py-lg-1 col-12 col-lg-auto">
              <div class="vr d-none d-lg-flex h-100 mx-lg-2 text-dark-emphasis" />
              <hr class="d-lg-none my-2 text-dark-emphasis">
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 text-center" role="button" @click="toggleTheme()"><FontAwesomeIcon :icon="dark ? faMoon : faSun" width="16" height="16" /><span class="d-lg-none d-inline"> Toogle Theme</span></a>
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
      dark: true
    };
  },
  computed: {
    portfolio () {
      return this.$store.state.portfolio;
    }
  },
  methods: {
    toggleTheme () {
      this.dark = !this.dark;
      useHead({
        bodyAttrs: { "data-bs-theme": this.dark ? "dark" : "light" }
      });
    }
  }
};
</script>
