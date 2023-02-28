<template>
  <div class="row g-4">
    <div v-for="(country, index) in tryCountries" :key="index" class="col-6 col-md-4 col-lg-3 col-xl-2">
      <CountryVS class="bg-body-tertiary" :vs="[country[0], country[1]]" />
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickBoxes",
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
  created () {
    this.codeCountries.forEach((code) => {
      const country1 = API.getCountryByCode(code[0]);
      const country2 = API.getCountryByCode(code[1]);
      this.tryCountries.push([country1, country2]);
    });
  }
};
</script>
