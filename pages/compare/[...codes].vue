<script setup>
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const { codes } = useRoute().params;

if (!codes.length || (codes.length > 2 && codes[2] !== "")) {
  throw createError({
    statusCode: 404,
    message: "Page not found",
    fatal: true
  });
}

definePageMeta({ layout: "main" });
</script>

<template>
  <section>
    <div class="container my-4">
      <BreadCrumb :items="['Compare']" :active="params.map(country => country.name_en)" />
      <div class="p-sm-5 rounded-3 bg-body-tertiary text-dark-emphasis text-center border mb-3 mb-lg-0 position-relative">
        <div class="row">
          <div v-for="country in params" :key="country.code_2" class="col-lg-6 mx-auto my-5">
            <div>
              <img class="img-fluid rounded-1 border flag" :src="country.flag" width="72" :alt="`Flag of ${country.name_en}`">
            </div>
            <h1>{{ country.name_en }}</h1>
            <img class="shape" :src="country.shape" :alt="`Shape of ${country.name_en}`">
            <p class="display-3 m-0"><b>~{{ UTILS.fixed(country.km2) }} km²</b></p>
            <p class="display-6 m-0 text-primary-emphasis">(~{{ UTILS.fixed(country.mi2) }} mi²)</p>
          </div>
        </div>
        <div class="position-absolute top-50 start-50 translate-middle fs-2">
          <FontAwesomeIcon :icon="faArrowRightArrowLeft" width="32" height="32" />
        </div>
      </div>
      <div class="row m-0 p-0 mb-3 position-relative">
        <div class="col-lg-12 order-2 order-lg-1 m-0 p-0">
          <div class="mt-n4">
            <CompareForm :vs="[params[0], params[1]]" />
          </div>
        </div>
        <div class="col-lg-12 order-1 order-lg-2 m-0 p-0 text-center">
          <div class="mb-3 mb-lg-0 mt-lg-3 bg-body-tertiary border rounded p-4">
            <p class="display-5 text-dark-emphasis">
              <b>{{ params[0].name_en }}</b> is
              <template v-if="compared.diff > 0">
                about <b class="text-primary-emphasis">{{ UTILS.fixed(compared.diff, 2) }}</b> times
              </template>
              <b class="text-uppercase text-primary-emphasis">{{ compared.word }}</b>
              {{ compared.func }}
              <b>{{ params[1].name_en }}</b>
            </p>
            <p class="m-0">{{ params[0].name_en }} total area is approximately {{ UTILS.fixed(params[0].km2) }} km², while {{ params[1].name_en }} is approximately {{ UTILS.fixed(params[1].km2) }} km², making {{ params[0].name_en }} {{ percent }}% the size of {{ params[1].name_en }}.</p>
          </div>
        </div>
      </div>
      <div class="py-4 rounded text-center">
        <p class="display-6 text-dark-emphasis">Compare <b>{{ params[0].name_en }}</b> with other countries or territories</p>
        <div class="row g-4">
          <div v-for="country in randomCountries" :key="country.code_2" class="col-6 col-md-4 col-lg-3 col-xl-2">
            <CountryVS :vs="[params[0], country]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CountryCompare",
  data () {
    return {
      params: [
        API.getCountryByCode(this.$route.params.codes[0].toLocaleUpperCase()),
        API.getCountryByCode(this.$route.params.codes[1].toLocaleUpperCase())
      ],
      compared: {},
      randomCountries: []
    };
  },
  computed: {
    percent () {
      const p = (this.params[0].km2 / this.params[1].km2) * 100;
      return UTILS.fixed(p);
    }
  },
  mounted () {
    while (this.randomCountries.length < 6) {
      this.randomCountries.push(API.getRandomCountry(this.params[0].code_2, this.params[1].code_2));
    }
  },
  created () {
    this.compared = UTILS.compareNumbers(this.params[0].km2, this.params[1].km2);
    UTILS.setPageSEO({
      title: `${this.params[0].name_en} vs ${this.params[1].name_en}`,
      description: `${this.params[0].name_en} is ${this.compared.diff > 0 ? "about " + UTILS.fixed(this.compared.diff, 2) + " times " : ""}${this.compared.word} ${this.compared.func} ${this.params[1].name_en}. ${this.params[0].name_en} total area is ~${UTILS.fixed(this.params[0].km2)} km², while ${this.params[1].name_en} is ~${UTILS.fixed(this.params[1].km2)} km², making ${this.params[0].name_en} ${this.percent}% the size of ${this.params[1].name_en}.`,
      keywords: `compare, ${this.params[0].name_en}, ${this.params[1].name_en}, area, size, km², mi², square kilometers, square miles, ${this.params[0].name_en} vs ${this.params[1].name_en}, ${this.params[1].name_en} vs ${this.params[0].name_en}`,
      page_url: `${siteInfo.url}/compare/${this.params[0].code_2}/${this.params[1].code_2}/`
    });
  }
};
</script>
