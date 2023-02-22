<script setup>
import { countries } from "~/assets/data/countries.json";
import { fixed, compareNumbers } from "~/assets/js/functions.js";
definePageMeta({ layout: "main" });
</script>

<template>
  <section>
    <div class="container my-4">
      <nav :style="`--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);`" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/">Compare</NuxtLink></li>
          <li class="breadcrumb-item active" v-for="country in params" :key="country.code_2">{{ country.name_en }}</li>
        </ol>
      </nav>
      <div class="p-sm-5 rounded-3 bg-body-tertiary text-dark-emphasis text-center border mb-3 mb-lg-0">
        <div class="row"> 
          <div class="col-lg-6 mx-auto my-5" v-for="country in params" :key="country.code_2">
            <div>
              <img class="img-fluid rounded h-100" :src="`/images/flags/${country.code_2}.svg`" width="75" :alt="`Flag of ${country.name_en}`"/>
            </div>
            <h1>{{ country.name_en }}</h1>
            <img class="img-fluid shape" :src="`/images/shapes/${country.code_2}.svg`" width="200" :alt="`Shape of ${country.name_en}`"/>
            <p class="display-3 m-0">~{{ fixed(country.km2) }} km²</p>
            <p class="display-6 m-0 text-primary-emphasis">(~{{ fixed(country.mi2) }} mi²)</p>
          </div>
        </div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-lg-12 order-2 order-lg-1 m-0 p-0">
          <div class="mt-n4">
            <CompareBox :country1="params[0]" :country2="params[1]"/>
          </div>
        </div>
        <div class="col-lg-12 order-1 order-lg-2 m-0 p-0 text-dark-emphasis text-center">
          <div class="mb-3 mb-lg-0 mt-lg-3 bg-body-tertiary border rounded p-4">
            <p class="display-5">
              <b>{{ params[0].name_en }}</b> is
              <template v-if="compared.diff > 0">
                about <b class="text-primary-emphasis">{{ fixed(compared.diff) }}</b> times
              </template>
              <b class="text-uppercase text-primary-emphasis">{{ compared.word }}</b>
              {{ compared.func }}
              <b>{{ params[1].name_en }}</b>
            </p>
            <p class="m-0 text-secondary-emphasis">{{ params[0].name_en }} total area is ~{{ fixed(params[0].km2) }} km², while {{ params[1].name_en }} is ~{{ fixed(params[1].km2) }} km², making Panama {{ percent }}% the size of United States.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountryCompare",
  data() {
    return {
      params: [
        countries.find(country => country.code_2 === this.$route.params.country1.toLocaleUpperCase()),
        countries.find(country => country.code_2 === this.$route.params.country2.toLocaleUpperCase())
      ],
      compared: {}
    };
  },
  created() {
    this.params[0].mi2 = this.params[0].km2 / 2.59;
    this.params[1].mi2 = this.params[1].km2 / 2.59;
    this.compared = compareNumbers(this.params[0].km2, this.params[1].km2);
  },
  computed: {
    percent() {
      let p = (this.params[0].km2 / this.params[1].km2) * 100;
      return p < 1 ? fixed(p, 2) : fixed(p);
    },
  }
};
</script>
