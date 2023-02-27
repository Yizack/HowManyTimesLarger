<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.$router.options.scrollBehavior = (to) => {
  if (to.hash === "") {
    return { left: 0, top: 0 };
  }
  else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ el: to.hash, top: 48, left: 0, behavior: "smooth" });
      }, 500);
    });
  }
};
</script>

<template>
  <!--<LoadingPage v-if="loading"/>-->
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      loading: true
    };
  },
  mounted () {
    if (localStorage.getItem("dark") === null) {
      localStorage.setItem("dark", true);
    }
  },
  beforeMount () {
    this.$nuxt.hook("page:finish", () => {
      this.loading = false;
    });
  }
};
</script>
