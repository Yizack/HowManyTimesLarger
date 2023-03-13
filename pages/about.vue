<script setup>
import changelog from "~/assets/data/changelog.json";
import { version as current } from "~/package.json";
definePageMeta({ layout: "main" });
</script>

<template>
  <main id="wrapper">
    <!-- Try -->
    <section id="contact">
      <div class="container py-4">
        <BreadCrumb :items="['About']" />
        <div class="mx-auto col-xl-8">
          <div class="text-center mb-4">
            <h1><b>About</b></h1>
          </div>
          <div v-if="!CAPACITOR.isNative()" class="mb-3">
            <h4>Is there a mobile app?</h4>
            <p class="m-0">Yes, there is. For now it is only available on Android but probably in the future it will be available for iOS.</p>
            <div class="text-center col-6 col-md-3">
              <a href="https://play.google.com/store/apps/details?id=com.howmanytimeslarger.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                <img class="img-fluid" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png">
              </a>
            </div>
          </div>
          <div class="mb-5">
            <h4>Credits</h4>
            <ul>
              <li>Most flags were downloaded from <a href="https://countryflagsapi.com" target="_blank">countryflagsapi.com</a>. Missing flags obtained from Wikimedia.</li>
              <li>Most country and territory shapes were downloaded from <a href="https://mylifeelsewhere.com" target="_blank">mylifeelsewhere.com</a>.</li>
              <li>Icons from <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>.</li>
              <li>Game was inspired by <a href="https://www.higherlowergame.com/" target="_blank">The Higher Lower Game</a>.</li>
              <li>Android and iOS app created using <a href="https://capacitorjs.com/" target="_blank">Capacitor.js</a> after Nuxt3 build.</li>
            </ul>
          </div>
          <hr>
          <div class="text-center mb-4">
            <h1><b>Changelog</b></h1>
            <p>Tracking updates of {{ siteInfo.name }}.</p>
          </div>
          <div>
            <div class="small d-flex flex-wrap">
              <span class="bg-warning-subtle text-warning-emphasis border border-warning rounded-pill px-2 mb-1 me-2"><b>App changes</b></span>
              <span class="bg-success-subtle text-success-emphasis border border-success rounded-pill px-2 mb-1 me-2"><b>New features</b></span>
              <span class="bg-danger-subtle text-danger-emphasis border border-danger rounded-pill px-2 mb-1 me-2"><b>Bug fixes</b></span>
            </div>
            <div v-for="(version, number) in changelog" :key="number" class="border p-3 my-4 rounded">
              <div class="d-flex mb-2">
                <div class="position-relative">
                  <h3 class="bg-light-subtle border p-2">{{ number }}</h3>
                  <span v-if="number === current" class="position-absolute top-0 start-100 translate-middle bg-primary-subtle text-info border border-info px-1 rounded mt-1 small"><b>Current</b></span>
                </div><span v-if="version.date" class="align-self-center text-muted-emphasis ms-2"><b>{{ new Date(`${version.date}T00:00:00.000`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) }}</b></span>
              </div>
              <div v-if="version.changes.length" class="mb-2">
                <div class="d-flex">
                  <h5 class="bg-warning-subtle text-warning-emphasis border border-warning rounded-pill px-2">Changes</h5>
                </div>
                <ul>
                  <li v-for="note in version.changes" :key="note">{{ note }}</li>
                </ul>
              </div>
              <div v-if="version.features.length" class="mb-2">
                <div class="d-flex">
                  <h5 class="bg-success-subtle text-success-emphasis border border-success rounded-pill px-2">New</h5>
                </div>
                <ul>
                  <li v-for="note in version.features" :key="note">{{ note }}</li>
                </ul>
              </div>
              <div v-if="version.fixes.length" class="mb-2">
                <div class="d-flex">
                  <h5 class="bg-danger-subtle text-danger-emphasis border border-danger rounded-pill px-2">Fixes</h5>
                </div>
                <ul>
                  <li v-for="note in version.fixes" :key="note">{{ note }}</li>
                </ul>
              </div>
            </div>
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
    UTILS.setPageSEO("about");
  }
};
</script>
