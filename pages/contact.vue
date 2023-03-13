<script setup>
definePageMeta({ layout: "main" });
</script>

<template>
  <main id="wrapper">
    <!-- Try -->
    <section id="contact">
      <div class="container py-4">
        <BreadCrumb :items="['Contact']" />
        <div class="mx-auto col-xl-8 bg-body-tertiary border rounded px-3 py-4">
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
              <li>Operating System: (Windows, Mac, Linux, Android, iOS, etc.)</li>
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
    UTILS.setPageSEO("contact");
  }
};
</script>
