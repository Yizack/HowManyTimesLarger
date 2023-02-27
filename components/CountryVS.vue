<script setup>
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <NuxtLink class="card card-body p-2 p-md-3 h-100 align-items-center justify-content-center border text-decoration-none text-center text-dark-emphasis" :to="`/compare/${vs[0].code_2}/${vs[1].code_2}/`">
    <span class="mb-2"><small><b>{{ vs[0].name_en }}</b></small></span>
    <div class="row align-items-center">
      <div class="col-5">
        <img class="img-fluid rounded-1 border flag" :src="`/images/flags/${vs[0].code_2}.svg`" width="50">
      </div>
      <div class="col-2 p-0 text-center">
        <span class="align-self-center"><FontAwesomeIcon :icon="faArrowRightArrowLeft" /></span>
      </div>
      <div class="col-5">
        <img class="img-fluid rounded-1 border flag" :src="`/images/flags/${vs[1].code_2}.svg`" width="50">
      </div>
    </div>
    <span class="mt-2"><small><b>{{ vs[1].name_en }}</b></small></span>
  </NuxtLink>
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
