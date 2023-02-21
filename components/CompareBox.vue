<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass, faEarthAmericas, faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { countries } from "~/assets/data/countries.json";
</script>

<template>
  <div class="col-lg-10 mx-auto">
    <div class="bg-body-tertiary border rounded-3 p-4">
      <form class="row g-3 justify-content-center align-items-center" ref="form">
        <div class="col-lg-5">
          <div class="input-group has-validation">
            <span class="input-group-text bg-body"><FontAwesomeIcon :icon="faEarthAmericas"/></span>
            <input class="form-control form-control-lg ps-5 bg-body" :value="country1" @input="field1.value = $event.target.value" type="text" placeholder="Type a country.." list="datalist" ref="field1" required>
            <div class="invalid-tooltip ms-lg-4">
              {{ invalid_country }}
            </div> 
          </div> 
        </div>
        <div class="col-lg-5">
          <div class="input-group has-validation">
            <span class="input-group-text bg-body"><FontAwesomeIcon :icon="faEarthEurope"/></span>
            <input :value="country2" @input="field2.value = $event.target.value" class="form-control form-control-lg ps-5 bg-body" type="text" placeholder="Type a country.." list="datalist" ref="field2" required>
            <div class="invalid-tooltip ms-lg-4">
              {{ invalid_country }}
            </div>
          </div>
        </div>
        <!-- Go-->
        <div class="col-lg-1 d-grid">
          <a class="btn btn-lg btn-primary text-uppercase" role="button" @click="compare()"><FontAwesomeIcon :icon="faMagnifyingGlass"/></a>
        </div>
      </form>
    </div>
  </div>
  <datalist id="datalist">
    <option v-for="country in countries" :key="country.code_2" :id="country.code_2" :value="country.name_en"/>
  </datalist>
</template>

<script>
export default {
  name: "CompareBox",
  props: ["country1", "country2"],
  data() {
    return {
      invalid_country : "Please select a valid option from the list",
      field1: {
        value: ""
      },
      field2: {
        value: ""
      },
    };
  },
  methods: {
    compare() {
      const params = [
        countries.find(country => country.name_en === this.field1.value)?.code_2,
        countries.find(country => country.name_en === this.field2.value)?.code_2
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
  },
  created() {
    this.field1.value = this.country1;
    this.field2.value = this.country2;
  }
};
</script>
