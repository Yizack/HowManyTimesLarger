<script setup>
import { faMagnifyingGlass, faGlobe, faEarthAmericas, faEarthEurope, faEarthAfrica, faEarthAsia, faEarthOceania, faSnowflake, faTimes } from "@fortawesome/free-solid-svg-icons";
definePageMeta({ layout: "main" });
UTILS.setPageSEO("countries");
</script>

<template>
  <main id="wrapper">
    <section id="countries">
      <div class="container py-4">
        <BreadCrumb :items="['Countries']" />
        <div class="d-flex mb-3">
          <div class="input-group">
            <span class="input-group-text bg-body"><FontAwesomeIcon :icon="faMagnifyingGlass" /></span>
            <input class="form-control form-control-lg bg-body text-dark-emphasis" type="text" placeholder="Type a country or territory..." @input="filter.search = $event.target.value">
          </div>
          <div class="dropdown">
            <a class="btn btn-lg btn-primary ms-3" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon :icon="continents.find(continent => filter.continent === continent.name).icon" width="24" /></a>
            <ul class="dropdown-menu text-dark-emphasis">
              <li v-for="(continent, index) in continents" :key="index" class="d-flex align-items-center">
                <a class="dropdown-item" role="button" :class="{active: filter.continent === continent.name}" @click="filter.continent = continent.name">
                  <FontAwesomeIcon :icon="continent.icon" width="24" />
                  <span class="ms-3">
                    {{ continent.name }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-center my-3">
          <h5 v-if="filtered.length" class="m-0">{{ filtered.length }} Results</h5>
          <h5 v-else class="m-0"><i>No results found</i></h5>
        </div>
        <div class="row g-4">
          <div v-for="(country, index) in filteredPage" :id="country.code_2" :key="index" class="col-12 col-lg-6 col-xl-4">
            <div class="row g-0 bg-body-tertiary position-relative h-100 rounded border" role="button" data-bs-toggle="modal" data-bs-target="#try" @click="updateCurrent(country)">
              <div class="col-5 p-3 p-md-4">
                <img class="w-100 mb-3 rounded border flag" :src="country.flag" :alt="`Flag of ${country.name_en}`">
                <img class="w-100 shape" :src="country.shape" :alt="`Shape of ${country.name_en}`">
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
                  <li><b>Area (km²)</b>: {{ UTILS.fixed(country.km2) }}</li>
                  <li><b>Area (mi²):</b> {{ UTILS.fixed(country.mi2) }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-if="pages > 1" class="d-flex justify-content-center mt-3">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li v-if="filterPage !== 1" class="page-item">
                <a class="page-link" href="#" aria-label="Previous" @click="filterPage--">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li v-for="page in pages" :key="page" class="page-item" :class="{ active: filterPage === page }">
                <a class="page-link" href="#" @click="filterPage = page">{{ page }}</a>
              </li>
              <li v-if="filterPage !== pages" class="page-item">
                <a class="page-link" href="#" aria-label="Next" @click="filterPage++">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <div id="try" class="modal fade" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-body-tertiary">
            <h5 class="modal-title">Random <b>{{ current.name_en }}</b></h5>
            <button type="button" class="btn bg-danger text-white" data-bs-dismiss="modal" aria-label="Close">
              <FontAwesomeIcon :icon="faTimes" width="16" height="16" />
            </button>
          </div>
          <div class="modal-body">
            <div class="row g-4">
              <div v-for="country in randomCountries" :key="country.code_2" class="col-md-6">
                <CountryVS :vs="[current, country]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      current: {},
      randomCountries: [],
      filter: {
        continent: "All",
        search: ""
      },
      continents: [
        { name: "All", icon: faGlobe },
        { name: "North America", icon: faEarthAmericas },
        { name: "South America", icon: faEarthAmericas },
        { name: "Europe", icon: faEarthEurope },
        { name: "Africa", icon: faEarthAfrica },
        { name: "Asia", icon: faEarthAsia },
        { name: "Oceania", icon: faEarthOceania },
        { name: "Antarctica", icon: faSnowflake }
      ],
      filterPage: 1,
      PerPage: 45
    };
  },
  computed: {
    filtered () {
      this.filterPage = 1;
      return API.filterCountries(this.filter.search, this.filter.continent);
    },
    filteredPage () {
      return this.filtered.slice((this.filterPage - 1) * this.PerPage, this.filterPage * this.PerPage);
    },
    pages () {
      return Math.ceil(this.filtered.length / this.PerPage);
    }
  },
  methods: {
    updateCurrent (country) {
      this.current = country;
      this.randomCountries = [];
      for (let i = 0; i < 6; i++) {
        this.randomCountries.push(API.getRandomCountry(country.code_2));
      }
    }
  }
};
</script>
