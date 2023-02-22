<script setup>
import siteInfo from "~/siteInfo.js";
</script>

<template>
  <footer class="text-white py-5 border-top bg-dark text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!--<img alt="Image" src="" class="mb-4">-->
          <p>
            © {{ new Date().getFullYear() }} {{ siteInfo.name }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
