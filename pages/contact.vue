<script setup>
definePageMeta({ layout: "main" });
</script>

<template>
  <main id="wrapper">
    <!-- Try -->
    <section id="contact">
      <div class="container py-4">
        <nav :style="`--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);`" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><NuxtLink to="/"><b>App</b></NuxtLink></li>
            <li class="breadcrumb-item">Contact</li>
          </ol>
        </nav>
        <div class="mx-auto col-xl-8">
          <div class="text-center mb-4">
            <h1><b>Contact</b></h1>
            <p>Get in touch for everything related to <NuxtLink to="/">{{ siteInfo.name }}</NuxtLink>.</p>
          </div>
          <div class="mb-5">
            <h4>My country or territory information is not correct or does not exist!</h4>
            <p>Send an email to <a :href="`mailto:${siteInfo.email}`">{{ siteInfo.email }}</a>, or <a :href="siteInfo.issues" target="_blank">submit a new issue</a> in the project's repository, or save me some time by correcting it yourself and <a :href="siteInfo.pulls" target="_blank">submitting a pull request</a> on GitHub for a review if you want to collaborate on the project.</p>
            <p>Please provide a little explanation and the source link of the information you wish to add or correct.</p>
          </div>
          <div>
            <h4>Have you found an error or a bug?</h4>
            <p>Send an email to <a :href="`mailto:${siteInfo.email}`">{{ siteInfo.email }}</a> or <a :href="siteInfo.issues" target="_blank">submit a new issue</a> in the project's repository or <a :href="siteInfo.pulls" target="_blank">submit a pull request</a> on GitHub for a review if you managed to patch the error/bug and want to collaborate on the project.</p>
            <p>Please provide additional information such as the browser, device, and operating system you are using and what were you doing when you encountered the error.</p>
            <ul>
              <li>Browser: (Chrome, Firefox, Safari, etc.)</li>
              <li>Operating System: (Windows, Mac, Linux, etc.)</li>
              <li>Device: (PC, Tablet, Phone, etc.)</li>
              <li>Steps to reproduce the error</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContactPage",
  created () {
    setPageSEO("contact");
  }
};
</script>
