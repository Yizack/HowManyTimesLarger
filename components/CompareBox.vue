<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass, faLocationDot } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="col-lg-10 mx-auto">
    <div class="bg-body-tertiary border rounded-3 p-4">
      <form ref="form" class="row g-3 justify-content-center align-items-center">
        <!-- field 1 -->
        <div class="col-lg-5">
          <div class="position-relative">
            <div class="input-group has-validation">
              <span class="input-group-text bg-body"><FontAwesomeIcon :icon="faLocationDot" width="16" height="16" /></span>
              <input ref="field1" class="form-control form-control-lg bg-body text-dark-emphasis" :value="field1.name_en" type="text" placeholder="Type a country.." required @input="field1.name_en = $event.target.value" @keyup="searchBox($event, 1)">
              <div class="invalid-tooltip ms-lg-4">
                {{ invalid_country }}
              </div>
            </div>
            <!-- list -->
            <ul v-if="search.searching && search.field === 1" class="autocomplete-list position-absolute rounded border bg-body py-2 px-0 shadow w-100 m-0">
              <li v-for="country in search.arr" :id="country.code_2" :key="country.code_2" role="button" class="py-2 px-3" @click="field1 = selectCountry(country)">
                <img class="img-fluid rounded me-2 h-100" :src="`/images/flags/${country.code_2}.svg`" width="32" :alt="`Flag of ${country.name_en}`" :title="`Flag of ${country.name_en}`">{{ country.name_en }}
              </li>
              <li v-if="!search.arr.length" class="py-2 px-3"><i>Not results found</i></li>
            </ul>
          </div>
        </div>
        <!-- field 2 -->
        <div class="col-lg-5">
          <div class="position-relative">
            <div class="input-group has-validation">
              <span class="input-group-text bg-body"><FontAwesomeIcon :icon="faLocationDot" width="16" height="16" /></span>
              <input ref="field2" class="form-control form-control-lg bg-body text-dark-emphasis" :value="field2.name_en" type="text" placeholder="Type a country.." required @input="field2.name_en = $event.target.value" @keyup="searchBox($event, 2)">
              <div class="invalid-tooltip ms-lg-4">
                {{ invalid_country }}
              </div>
            </div>
            <!-- list -->
            <ul v-if="search.searching && search.field === 2" class="autocomplete-list position-absolute rounded border bg-body py-2 px-0 shadow w-100 m-0">
              <li v-for="country in search.arr" :id="country.code_2" :key="country.code_2" role="button" class="py-2 px-3" @click="field2 = selectCountry(country)">
                <img class="img-fluid rounded-1 me-2 h-100" :src="`/images/flags/${country.code_2}.svg`" width="32" :alt="`Flag of ${country.name_en}`" :title="`Flag of ${country.name_en}`">{{ country.name_en }}
              </li>
              <li v-if="!search.arr.length" class="py-2 px-3">Not results found</li>
            </ul>
          </div>
        </div>
        <!-- Go-->
        <div class="col-lg-1 d-grid">
          <a class="btn btn-lg btn-primary text-uppercase" role="button" @click="compare()"><FontAwesomeIcon :icon="faMagnifyingGlass" width="24" height="24" /></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompareBox",
  props: {
    vs: {
      type: Array,
      default: () => [{}, {}]
    }
  },
  data () {
    return {
      search: {
        field: null,
        searching: false,
        arr: []
      },
      invalid_country: "Please select a valid option from the list",
      field1: {
        name_en: "",
        code_2: ""
      },
      field2: {
        name_en: "",
        code_2: ""
      }
    };
  },
  created () {
    Object.assign(this.field1, this.vs[0]);
    Object.assign(this.field2, this.vs[1]);
  },
  methods: {
    searchBox (event, field) {
      this.$refs[`field${field}`].classList.remove("is-invalid");

      const input = event.target.value;
      this.search.field = field;
      this.search.searching = true;

      if (input === "") {
        this.search.arr = [];
        this.search.searching = false;
      }

      this.search.arr = countries.filter((country) => {
        const wordsMatch = normalize(String(input).toLocaleLowerCase()).split(" ").map(char => normalize(String(country.name_en).toLocaleLowerCase()).includes(char)).every(Boolean);
        if (wordsMatch) {
          return country;
        }
        return false;
      });
    },
    selectCountry (country) {
      this.search.searching = false;
      return {
        name_en: country.name_en,
        code_2: country.code_2
      };
    },
    compare () {
      const params = [
        this.field1.code_2,
        this.field2.code_2
      ];

      params.forEach((param, index) => {
        if (!param) {
          this.$refs[`field${index + 1}`].classList.add("is-invalid");
        }
        else {
          this.$refs[`field${index + 1}`].classList.remove("is-invalid");
          this.$refs[`field${index + 1}`].classList.add("is-valid");
        }
      });

      if (params.every(Boolean)) {
        this.$router.push(`/compare/${params.join("/")}/`);
      }
    }
  }
};
</script>

<style scoped>
.autocomplete-list {
  list-style-type: none;
  z-index: 1;
  max-height: 300px;
  overflow-y: auto;
}
.autocomplete-list li:hover {
  background-color: rgba(var(--bs-tertiary-bg-rgb));
}
</style>
