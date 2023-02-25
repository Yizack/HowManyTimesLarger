<script setup>
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div v-if="loaded && !loser" class="container-fluid vh-100">
    <div class="row gx-3 gy-5 h-100 p-3 pb-3 pt-5 pt-lg-4">
      <div class="col-lg-6">
        <div class="border rounded h-100 p-3 p-lg-5 text-center d-flex flex-column align-items-center justify-content-center shadow" :style="`background: url('/images/shapes/${left.code_2}.svg')  center center / cover no-repeat;`">
          <h1>“{{ left.name_en }}”</h1>
          <span>total area is approximately</span>
          <div class="display-1 text-primary-emphasis"><b>{{ fixed(left.km2) }}</b> km²</div>
          <div class="display-6 text-primary-emphasis">({{ fixed(left.km2 / 2.59) }}) mi²</div>
        </div>
      </div>
      <div class="col-lg-6 mt-3 mt-lg-5">
        <div class="border rounded h-100 p-3 p-lg-5 text-center d-flex flex-column align-items-center justify-content-center shadow" :style="`background: url('/images/shapes/${right.code_2}.svg')  center center / cover no-repeat;`">
          <h1>“{{ right.name_en }}”</h1>
          <span>total area is</span>
          <div class="text-uppercase">
            <span class="btn btn-outline-light btn-lg rounded-pill my-2 ps-4 d-flex justify-content-between align-items-center" style="width: 145px;" @click="selectOption(left.km2 <= right.km2)">
              <span>Larger</span>
              <FontAwesomeIcon :icon="faCaretUp" />
            </span>
            <span class="btn btn-outline-light btn-lg rounded-pill my-2 d-flex justify-content-between align-items-center" style="width: 145px;" @click="selectOption(left.km2 >= right.km2)">
              <span>Smaller</span>
              <FontAwesomeIcon :icon="faCaretDown" />
            </span>
          </div>
          <span>than <span class="text-dark-emphasis"><b>{{ left.name_en }}</b></span></span>
        </div>
      </div>
    </div>
    <div class="position-absolute start-50 translate-middle-x">
      <ul class="list-inline m-0">
        <li v-for="(page, index) in siteInfo.pages" :key="index" class="list-inline-item">
          <a class="social-icon text-xs-center" role="button" @click="openPage(page.url)">{{ page.name }}</a>
        </li>
      </ul>
    </div>
    <div class="position-absolute score-bar start-0 pt-2 pt-lg-0 d-flex justify-content-between w-100 px-4">
      <div class="text-center">
        <h5 class="text-dark-emphasis">High Score: <span class="text-primary-emphasis">{{ highscore }}</span></h5>
      </div>
      <div class="text-center">
        <h5 class="text-dark-emphasis">Score: <span class="text-primary-emphasis">{{ score }}</span></h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamePage",
  data () {
    return {
      left: {},
      right: {},
      loaded: false,
      score: 0,
      loser: false,
      highscore: 0
    };
  },
  mounted () {
    this.left = randomCountry();
    this.right = randomCountry(this.left.code_2);
    this.loaded = true;
    this.highscore = localStorage.getItem("highscore") || 0;
  },
  methods: {
    selectOption (correct) {
      if (correct) {
        this.score++;
        this.left = this.right;
        this.right = randomCountry(this.left.code_2);
      }
      else {
        this.loser = true;
        if (this.score > this.highscore) {
          localStorage.setItem("highscore", this.score);
          this.highscore = this.score;
        }
      }
    },
    openPage (url) {
      if (window.confirm("Are you sure you want to leave this page?")) {
        this.$router.push(url);
      }
    }
  }
};
</script>
