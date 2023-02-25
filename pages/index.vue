<script setup>
definePageMeta({ layout: "main" });
</script>

<template>
  <!-- Header -->
  <section class="py-4 py-lg-5">
    <div class="container">
      <div class="row py-sm-5">
        <div class="col-xl-8 m-auto text-center text-dark-emphasis mb-5">
          <h6 class="fw-normal mb-3">{{ siteInfo.description }}</h6>
          <h1 class="display-4 mb-0">
            Let's Find Out
            <span class="d-block">{{ siteInfo.name }}</span>
          </h1>
        </div>
        <!-- CompareForm -->
        <CompareForm />
      </div>
    </div>
  </section>
  <!-- Try -->
  <section class="mb-4 mb-sm-5">
    <div class="container">
      <!-- QuickBoxes -->
      <QuickBoxes />
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
