<script setup>
import { countries } from "~/public/data/countries.json";
definePageMeta({ layout: "main" });
</script>

<template>
  <section class="my-5">
    <div class="container">
      <nav :style="`--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);`" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/"><b>App</b></NuxtLink></li>
          <li class="breadcrumb-item">Countries</li>
        </ol>
      </nav>
      <div class="row g-4">
        <div v-for="country in countries" :key="country.code_2" class="col-sm-6 col-lg-5 col-xl-4">
          <div class="row g-0 bg-body-tertiary position-relative h-100 rounded border">
            <div class="col-5 p-3 p-md-4">
              <img class="w-100 mb-3 rounded" :src="`/images/flags/${country.code_2}.svg`" alt="...">
              <img class="w-100 shape" :src="`/images/shapes/${country.code_2}.svg`" alt="...">
            </div>
            <div class="col-7 p-3 ps-md-2">
              <h5 class="m-0">{{ country.name_en }}</h5>
              <ul class="list-unstyled m-0">
                <li><b>Continent:</b> {{ country.continent_en }}</li>
                <li><b>Capital:</b> {{ country.capital_en }}</li>
                <li><b>Dial code:</b> {{ country.dial_code }}</li>
                <li><b>Alpha-2:</b> {{ country.code_2 }}</li>
                <li><b>Alpha-3:</b> {{ country.code_3 }}</li>
                <li><b>TLD:</b> {{ country.tld }}</li>
                <li><b>Area (km²)</b>: {{ country.km2 >= 1 ? fixed(country.km2) : fixed(country.km2, 2) }}</li>
                <li><b>Area (mi²):</b> {{ country.km2 / 2.59 >= 1 ? fixed(country.km2 / 2.59) : fixed(country.km2 / 2.59, 2) }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountriesPage",
  data () {
    return {
      countries
    };
  }
};
</script>
