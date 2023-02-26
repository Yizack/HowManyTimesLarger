<script setup>
import { faCaretUp, faCaretDown, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="container-fluid">
    <div v-if="loaded && !loser" class="game vh-100 position-relative p-lg-3 pt-5 pb-lg-5 pb-5">
      <div class="row h-100 position-relative">
        <Transition name="fade">
          <div v-if="animateElements" class="col-lg-6 option pb-2 pb-lg-0">
            <div class="border border-primary rounded h-100 p-3 p-lg-5 text-center d-flex flex-column align-items-center justify-content-center shadow" :style="`background: url('/images/shapes/${left.code_2}.svg')  center center / cover no-repeat;`">
              <h1>“{{ left.name_en }}”</h1>
              <span>total area is approximately</span>
              <div class="display-1 text-primary-emphasis"><b>{{ fixed(left.km2) }}</b> km²</div>
              <div class="display-6 text-primary-emphasis">({{ fixed(left.km2 / 2.59) }}) mi²</div>
            </div>
          </div>
        </Transition>
        <Transition name="fade">
          <div v-if="animateElements" class="col-lg-6 option pt-2 pt-lg-0">
            <div class="border border-secondary rounded h-100 p-3 p-lg-5 text-center d-flex flex-column align-items-center justify-content-center shadow" :style="`background: url('/images/shapes/${right.code_2}.svg')  center center / cover no-repeat;`">
              <h1>“{{ right.name_en }}”</h1>
              <span>total area is{{ reveal ? " approximately" : null }}</span>
              <div v-if="!reveal" class="d-flex flex-column justify-content-center align-items-center">
                <div class="text-uppercase">
                  <span class="btn btn-outline-light btn-lg rounded-pill my-2 ps-4 d-flex justify-content-between align-items-center" @click="selectOption(left.km2 <= right.km2)">
                    <span>Larger</span>
                    <FontAwesomeIcon :icon="faCaretUp" />
                  </span>
                  <span class="btn btn-outline-light btn-lg rounded-pill my-2 d-flex justify-content-between align-items-center" @click="selectOption(left.km2 >= right.km2)">
                    <span>Smaller</span>
                    <FontAwesomeIcon :icon="faCaretDown" />
                  </span>
                </div>
                <span>than <span class="text-dark-emphasis"><b>{{ left.name_en }}</b></span></span>
              </div>
              <div v-else>
                <div class="display-1 text-primary-emphasis"><b>{{ fixed(tweened) }}</b> km²</div>
                <Transition name="fade">
                  <div v-if="tweened == right.km2" class="display-6 text-primary-emphasis">({{ fixed(right.km2 / 2.59) }}) mi²</div>
                </Transition>
              </div>
            </div>
          </div>
        </Transition>
        <div class="position-absolute top-50 start-50 translate-middle vs p-0">
          <Transition name="bounce">
            <div v-if="animateElements && !reveal" class="rounded-circle shadow bg-white h-100 w-100 position-relative">
              <h1 class="text-dark m-0 position-absolute start-50 top-50 translate-middle"><b>VS</b></h1>
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
      <div class="position-absolute score-bar start-0 d-flex justify-content-between w-100 px-lg-3">
        <div class="text-center">
          <h5 class="text-dark-emphasis">High Score: <span class="text-primary-emphasis">{{ highscore }}</span></h5>
        </div>
        <div class="text-center">
          <h5 class="text-dark-emphasis">Score: <span class="text-primary-emphasis">{{ score }}</span></h5>
        </div>
      </div>
    </div>
    <Transition name="fade">
      <div v-if="loser" class="position-absolute start-50 top-50 translate-middle w-100">
        <div class="text-center text-dark-emphasis container rounded border shadow py-5">
          <h1 class="display-1"><b>Game Over</b></h1>
          <h2>You Scored: <span class="text-primary-emphasis">{{ score }}</span></h2>
          <h2>High Score: <span class="text-primary-emphasis">{{ highscore }}</span></h2>
          <div class="mt-4">
            <NuxtLink class="btn btn-primary btn-lg rounded-pill mx-2" to="/">Back to Website</NuxtLink>
            <a class="btn btn-primary btn-lg rounded-pill mx-2" @click="playAgain()">Play Again</a>
          </div>
        </div>
      </div>
    </Transition>
    <div class="position-absolute start-50 translate-middle-x w-100 pages d-flex justify-content-center">
      <ul class="list-inline m-0">
        <template v-for="(page, index) in siteInfo.pages" :key="index">
          <li class="list-inline-item">
            <a class="text-dark-emphasis" role="button" @click="openPage(page.url)">{{ page.name }}</a>
          </li>
          <li v-if="index < siteInfo.pages.length - 1" class="list-inline-item">
            <span>•</span>
          </li>
        </template>
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
      tweened: 0
    };
  },
  watch: {
    async reveal (bool) {
      if (bool) {
        const duration = 0.5;
        await tweenNumber(this, this.right.km2, duration);
      }
    }
  },
  mounted () {
    this.left = randomCountry();
    this.right = randomCountry(this.left.code_2);
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
          this.right = randomCountry(this.left.code_2);
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
      if (window.confirm("Are you sure you want to leave this page? Your progress will be lost.")) {
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
      this.left = randomCountry();
      this.right = randomCountry(this.left.code_2);
      this.animate();
    }
  }
};
</script>

<style>
@import "~/assets/css/game.css";
</style>
