<template>
  <svg class="svg-inline--fa" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-289 413.9 16 14">
    <path :fill="dark ? colors.dark.primary : colors.light.primary" d="M-288.7,417.2c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l1.3-1.3v9.6c0,0.6,0.4,1,1,1s1-0.4,1-1v-9.6l1.3,1.3c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4l-3-3c-0.4-0.4-1-0.4-1.4,0L-288.7,417.2L-288.7,417.2z" />
    <path :fill="dark ? colors.dark.secondary : colors.light.secondary" d="M-277.7,427.6c0.4,0.4,1,0.4,1.4,0l3-3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-1.3,1.3v-9.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v9.6l-1.3-1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L-277.7,427.6L-277.7,427.6z" />
  </svg>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      colors: {
        dark: {
          primary: "#72C5A2",
          secondary: "#ECB390"
        },
        light: {
          primary: "#2d9e64",
          secondary: "#af3c00"
        }
      }
    };
  }
};
</script>
