<script setup>
if (CAPACITOR.isAndroid()) {
  const { $router } = useNuxtApp();
  CAPACITOR.onBack((canGoBack) => {
    if (!canGoBack) {
      CAPACITOR.exit();
    }
    else {
      $router.back();
    }
  });
}
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
    this.$nuxt.hook("page:finish", () => {
      this.loading = false;
    });
  }
};
</script>
