<script setup>
definePageMeta({ layout: "main" });
</script>

<template>
  <!-- Header -->
  <header>
    <div class="container-fluid py-5 bg-body-secondary p-0">
      <div class="row mx-auto container p-0">
        <div class="col-xl-8 m-auto text-center text-dark-emphasis mb-5">
          <h6 class="fw-normal mb-3">{{ siteInfo.description }}</h6>
          <h2 class="display-4 mb-0">Let's Find Out</h2>
          <h1 class="display-3 mb-0"><b>{{ siteInfo.name }}</b></h1>
        </div>
        <!-- CompareForm -->
        <CompareForm />
      </div>
    </div>
  </header>
  <main id="wrapper">
    <!-- Try -->
    <section id="try">
      <div class="container py-5">
        <!-- QuickBoxes -->
        <QuickBoxes />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage"
};
</script>
