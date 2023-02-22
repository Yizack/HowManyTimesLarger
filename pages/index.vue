<script setup>
import siteInfo from "~/siteInfo.js";
definePageMeta({ layout: "main" });
</script>


<template>
  <!-- Header -->
  <section class="py-4 py-lg-5">
    <div class="container">
      <div class="row py-sm-5">
        <div class="col-xl-8 m-auto text-center text-dark-emphasis mb-5">
          <h6 class="fw-normal mb-3">{{ siteInfo.description }}</h6>
          <h1 class="display-4 mb-0">Let's Find Out
            <span class="d-block">{{ siteInfo.name }}</span>
          </h1>
        </div>
        <!-- CompareBox -->
        <CompareBox/>
      </div>
    </div>
  </section>
  <!-- Try -->
  <section class="mb-5">
    <div class="container">
      <!-- TryBoxes -->
      <TryBoxes/>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
