<template>
  <div id="layout">
    <NavbarComp />
    <slot />
    <FooterComp />
  </div>
</template>

<script>
export default {
  name: "SiteLayout"
};
</script>
