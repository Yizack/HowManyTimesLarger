<template>
  <nav :style="`--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);`" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><NuxtLink to="/"><b>App</b></NuxtLink></li>
      <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">{{ item }}</li>
      <li v-for="(item, index) in active" :key="index" class="breadcrumb-item active text-primary-emphasis" aria-current="page">{{ item }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    active: {
      type: Array,
      required: false,
      default: () => []
    }
  }
};
</script>
