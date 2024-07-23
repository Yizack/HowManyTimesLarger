<script setup>
import { version } from "~/package.json";
</script>

<template>
  <footer class="text-white py-4 border-top bg-dark text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- <img alt="Image" src="" class="mb-4"> -->
          <p class="m-0">© {{ new Date().getFullYear() }} <b>{{ siteInfo.name }}</b>. <i><small class="text-muted">v{{ version }}</small></i></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp"
};
</script>
