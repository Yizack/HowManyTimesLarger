<script setup>
import { faCaretUp, faCaretDown, faCheck, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <!-- Game -->
  <div class="container-fluid vh-100 position-relative">
    <div v-if="loaded && !loser" class="game h-100 p-lg-3 pt-5 pb-lg-5 pb-5">
      <div class="row h-100 position-relative">
        <!-- Country: Left + Fade Transition -->
        <Transition name="fade">
          <div v-if="animateElements" class="col-lg-6 option pb-2 pb-lg-0">
            <div class="border border-primary border-3 rounded h-100 w-100 p-3 p-lg-5 text-center d-flex flex-column align-items-center justify-content-center shadow position-relative bg-body-secondary z-1">
              <img class="shape-game z-n1 position-absolute w-100 h-100 object-fit-cover" :src="left.shape">
              <img class="img-fluid rounded-1 border border-1 bg-body flag-game" :src="left.flag" :alt="`Flag of ${left.name_en}`">
              <h1>“<b>{{ left.name_en }}</b>”</h1>
              <span>total area is approximately</span>
              <div class="display-2 text-game"><b>{{ UTILS.fixed(left.km2) }} km²</b></div>
              <div class="display-6 text-game">({{ UTILS.fixed(left.mi2) }}) mi²</div>
            </div>
          </div>
        </Transition>
        <!-- Country: Right + Fade Transition -->
        <Transition name="fade">
          <div v-if="animateElements" class="col-lg-6 option pt-2 pt-lg-0">
            <div class="border border-secondary border-3 rounded h-100 w-100 p-3 p-lg-5 text-center d-flex flex-column align-items-center justify-content-center shadow position-relative bg-body-secondary z-1">
              <img class="shape-game z-n1 position-absolute w-100 h-100 object-fit-cover" :src="right.shape">
              <img class="img-fluid rounded-1 border border-1 bg-body flag-game" :src="right.flag" :alt="`Flag of ${right.name_en}`">
              <h1>“<b>{{ right.name_en }}</b>”</h1>
              <span>total area is{{ reveal ? " approximately" : null }}</span>
              <div v-if="!reveal" class="d-flex flex-column justify-content-center align-items-center">
                <div class="text-uppercase">
                  <a class="btn btn-outline-light btn-game rounded-pill my-2 d-flex justify-content-between align-items-center" @click="selectOption(left.km2 <= right.km2)">
                    <b class="ps-2">Larger</b>
                    <FontAwesomeIcon :icon="faCaretUp" />
                  </a>
                  <a class="btn btn-outline-light btn-game rounded-pill my-2 d-flex justify-content-between align-items-center" @click="selectOption(left.km2 >= right.km2)">
                    <b>Smaller</b>
                    <FontAwesomeIcon :icon="faCaretDown" />
                  </a>
                </div>
                <span>than <span class="text-dark-emphasis"><b>{{ left.name_en }}</b></span></span>
              </div>
              <div v-else>
                <div class="display-2 text-game"><b>{{ UTILS.fixed(tweened) }} km²</b></div>
                <div class="display-6 text-game">({{ UTILS.fixed(tweened / 2.59) }}) mi²</div>
              </div>
            </div>
          </div>
        </Transition>
        <!-- VS badge + Bounce Transition -->
        <div class="position-absolute top-50 start-50 translate-middle vs p-0 z-1">
          <Transition name="bounce">
            <div v-if="animateElements && !reveal" class="rounded-circle shadow vs-container h-100 w-100 position-relative">
              <h1 class="m-0 position-absolute start-50 top-50 translate-middle"><b>VS</b></h1>
            </div>
            <div v-else-if="correctAnswer && reveal" class="rounded-circle shadow bg-primary h-100 w-100 position-relative">
              <FontAwesomeIcon :icon="faCheck" class="text-white m-0 position-absolute start-50 top-50 translate-middle w-100 h-50" />
            </div>
            <div v-else-if="!correctAnswer && reveal" class="rounded-circle shadow bg-danger h-100 w-100 position-relative">
              <FontAwesomeIcon :icon="faTimes" class="text-white m-0 position-absolute start-50 top-50 translate-middle w-100 h-50" />
            </div>
          </Transition>
        </div>
      </div>
      <!-- Score bar -->
      <div class="position-absolute score-bar start-0 d-flex justify-content-between w-100 px-3 px-lg-4">
        <div class="text-center">
          <h5 class="text-dark-emphasis d-flex">
            <span class="me-2">High Score:</span>
            <span class="text-primary-emphasis"><b>{{ highscore }}</b></span>
          </h5>
        </div>
        <div class="text-center">
          <h5 class="text-dark-emphasis d-flex">
            <span class="me-2">Score:</span>
            <Transition name="bounce">
              <span v-if="animateElements" class="text-primary-emphasis"><b>{{ score }}</b></span>
            </Transition>
          </h5>
        </div>
      </div>
    </div>
    <!-- Game Over Screen + Fade Transition -->
    <Transition name="fade">
      <div v-if="loser" class="position-absolute start-50 top-50 translate-middle w-100 p-2 p-lg-0">
        <div class="text-center text-dark-emphasis container rounded border shadow py-5 col-lg-6">
          <h1 class="display-1"><b>Game Over</b></h1>
          <h2>You Scored: <span class="text-primary-emphasis"><b>{{ score }}</b></span></h2>
          <h2>High Score: <span class="text-primary-emphasis"><b>{{ highscore }}</b></span></h2>
          <div class="mt-4">
            <NuxtLink class="btn btn-primary btn-lg rounded-pill mx-2 my-1" to="/">Back to Home</NuxtLink>
            <a class="btn btn-primary btn-lg rounded-pill mx-2 my-1" @click="playAgain()">Play Again</a>
          </div>
        </div>
      </div>
    </Transition>
    <!-- Pages -->
    <div class="position-absolute start-50 translate-middle-x pages d-flex justify-content-center">
      <ul class="list-inline m-0">
        <template v-for="page in siteInfo.pages" :key="page.path">
          <template v-if="page.name !== 'Game'">
            <li class="list-inline-item">
              <a class="text-dark-emphasis" role="button" @click="openPage(page.path)">{{ page.name }}</a>
            </li>
            <li class="list-inline-item">
              <span>|</span>
            </li>
          </template>
        </template>
        <li class="list-inline-item">
          <Transition name="fade">
            <a v-if="loaded" class="text-dark-emphasis" role="button" @click="toggleTheme()"><FontAwesomeIcon :icon="dark ? faMoon : faSun" /></a>
          </Transition>
        </li>
      </ul>
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
      animateElements: false,
      score: 0,
      loser: false,
      highscore: 0,
      correctAnswer: false,
      reveal: false,
      tweened: 0,
      dark: true
    };
  },
  watch: {
    async reveal (bool) {
      if (bool) {
        const duration = 0.5;
        await UTILS.tweenNumber(this, this.right.km2, duration);
      }
    },
    dark (bool) {
      useHead({
        bodyAttrs: { "data-bs-theme": bool ? "dark" : "light" }
      });
    }
  },
  created () {
    UTILS.setPageSEO("game");
  },
  mounted () {
    this.dark = JSON.parse(localStorage.getItem("dark"));
    this.left = API.getRandomCountry();
    this.right = API.getRandomCountry(this.left.code_2);
    this.highscore = localStorage.getItem("highscore") || 0;
    this.loaded = true;
    this.animate();
  },
  methods: {
    animate () {
      this.animateElements = false;
      setTimeout(() => {
        this.animateElements = true;
      });
    },
    selectOption (correct) {
      this.reveal = true;
      this.correctAnswer = correct;
      setTimeout(() => {
        if (correct) {
          this.score++;
          this.left = this.right;
          this.right = API.getRandomCountry(this.left.code_2);
        }
        else {
          this.loser = true;
          if (this.score > this.highscore) {
            localStorage.setItem("highscore", this.score);
            this.highscore = this.score;
          }
        }
        this.continueGame();
      }, 3000);
    },
    openPage (url) {
      const message = "Are you sure you want to leave this page? Your progress will be lost.";
      if (this.score === 0 || window.confirm(message)) {
        this.$router.push(url);
      }
    },
    continueGame () {
      this.tweened = 0;
      this.reveal = false;
      this.animate();
    },
    playAgain () {
      this.score = 0;
      this.loser = false;
      this.left = API.getRandomCountry();
      this.right = API.getRandomCountry(this.left.code_2);
      this.animate();
    },
    toggleTheme () {
      this.dark = !this.dark;
      localStorage.setItem("dark", this.dark);
    }
  }
};
</script>

<style>
@import "~/assets/css/game.css";
</style>
