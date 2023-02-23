<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { countries } from "~/public/data/countries.json";
</script>

<template>
  <div class="row g-4">
    <div v-for="(country, index) in tryCountries" :key="index" class="col-6 col-md-4 col-lg-3 col-xl-2">
      <NuxtLink class="card card-body bg-body-tertiary h-100 align-items-center justify-content-center border text-decoration-none" :to="`/compare/${country[0].code_2}/${country[1].code_2}/`">
        <span class="mb-2"><small>{{ country[0].name_en }}</small></span>
        <div class="d-flex align-items-center">
          <img class="img-fluid rounded-1" :src="`/images/flags/${country[0].code_2}.svg`" width="40">
          <span class="mx-3 text-dark-emphasis align-self-center"><FontAwesomeIcon :icon="faArrowRightArrowLeft" /></span>
          <img class="img-fluid rounded-1" :src="`/images/flags/${country[1].code_2}.svg`" width="40">
        </div>
        <span class="mt-2"><small>{{ country[1].name_en }}</small></span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "TryBoxes",
  data () {
    return {
      codeCountries: [
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
      ],
      tryCountries: []
    };
  },
  mounted () {
    this.getCountries();
  },
  methods: {
    getCountries () {
      this.codeCountries.forEach((code) => {
        const country1 = countries.find(country => country.code_2 === code[0]);
        const country2 = countries.find(country => country.code_2 === code[1]);
        this.tryCountries.push([country1, country2]);
      });
    }
  }
};
</script>
