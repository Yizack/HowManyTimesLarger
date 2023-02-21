<script setup>
import siteInfo from "~/siteInfo.js";
definePageMeta({ layout: "main" });
</script>


<template>
  <section class="py-8 py-lg-9">
    <div class="container">
      <div class="row py-sm-5">
        <!-- Title -->
        <div class="col-xl-8 m-auto text-center text-dark-emphasis mb-5">
          <h6 class="fw-normal mb-3">{{ siteInfo.description }}</h6>
          <h1 class="display-4 mb-0">Let's Find Out
            <span class="d-block">{{ siteInfo.name }}</span>
          </h1>
        </div>
        <!-- Compare -->
        <CompareBox/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
