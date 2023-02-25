<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <FontAwesomeIcon :icon="icon" width="16" height="16" />
</template>

<script>
export default {
  name: "FontAwesomeIcon",
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
};
</script>
