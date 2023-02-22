<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="row g-4">
    <div class="col-6 col-md-4 col-lg-3 col-xl-2" v-for="(code, index) in tryCountries" :key="index">
      <NuxtLink class="card card-body bg-body-tertiary h-100 align-items-center justify-content-center border-0" :to="`/compare/${code[0]}/${code[1]}`">
        <div class="d-flex align-items-center">
          <img class="img-fluid rounded-1" :src="`/images/flags/${code[0]}.svg`" width="40"/>
          <span class="mx-3 text-dark-emphasis align-self-center"><FontAwesomeIcon :icon="faArrowRightArrowLeft"/></span>
          <img class="img-fluid rounded-1" :src="`/images/flags/${code[1]}.svg`" width="40"/>
        </div> 
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "TryBoxes",
  data() {
    return {
      tryCountries: [
        ["US", "CA"],
        ["BR", "AR"],
        ["MX", "ES"],
        ["FR", "DE"],
        ["IT", "GB"],
        ["RU", "CN"],
        ["JP", "KR"],
        ["IN", "AU"],
        ["NZ", "ZA"],
        ["EG", "SE"],
        ["TR", "TH"],
        ["ID", "MY"]
      ]
    };
  }
};
</script>
