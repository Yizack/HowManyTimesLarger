<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <a class="card card-body h-100 align-items-center justify-content-center border text-decoration-none" :href="`/compare/${vs[0].code_2}/${vs[1].code_2}/`">
    <span class="mb-2 text-dark-emphasis"><small><b>{{ vs[0].name_en }}</b></small></span>
    <div class="d-flex align-items-center">
      <img class="img-fluid rounded-1" :src="`/images/flags/${vs[0].code_2}.svg`" width="40">
      <span class="mx-3 text-dark-emphasis align-self-center"><FontAwesomeIcon :icon="faArrowRightArrowLeft" /></span>
      <img class="img-fluid rounded-1" :src="`/images/flags/${vs[1].code_2}.svg`" width="40">
    </div>
    <span class="mt-2 text-dark-emphasis"><small><b>{{ vs[1].name_en }}</b></small></span>
  </a>
</template>

<script>
export default {
  props: {
    vs: {
      type: Array,
      required: true
    }
  }
};
</script>
