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
  <LoadingPage v-if="loading" />
  <NuxtLoadingIndicator :throttle="0" />
  <NuxtLayout>
    <Transition name="page" mode="out-in">
      <div id="page" :key="$route.fullPath">
        <NuxtPage />
      </div>
    </Transition>
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
  beforeMount () {
    this.$nuxt.hook("page:finish", async () => {
      await UTILS.setDarkMode(await UTILS.isDarkMode());
      this.loading = false;
    });
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate(0, 10px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}
</style>
