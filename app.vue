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
  <div>
    <LoadingPage v-if="loading" />
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtLayout>
      <Transition name="page" mode="out-in">
        <div id="page">
          <NuxtPage />
        </div>
      </Transition>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
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
