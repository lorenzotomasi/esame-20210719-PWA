<template>
  <button
    :class="{
      btn: true,
      'btn-custom-primary': semantic === 'primary',
      'btn-custom-secondary': semantic === 'secondary',
      'btn-outline': variant === 'outline',
    }"
  >
    {{ content }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    content: {
      type: String,
      required: true,
    },
    semantic: {
      type: String,
      default: "primary",
    },
    variant: {
      type: String,
      default: "normal",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
$primary-color: #000;
$primary-color-contrast: #fff;
$secondary-color: #239084;
$secondary-color-contrast: #fff;

.btn-custom-primary {
  background-color: $primary-color;
  color: $primary-color-contrast;
  &.btn-outline,
  &:hover {
    background-color: #fff;
    color: $primary-color;
    border-color: $primary-color;
  }
  &.btn-outline:hover {
    background-color: $primary-color;
    color: $primary-color-contrast;
  }
}

.btn-custom-secondary {
  background-color: $secondary-color;
  color: $secondary-color-contrast;
  &.btn-outline,
  &:hover {
    background-color: #fff;
    color: $secondary-color;
    border-color: $secondary-color;
  }
  &.btn-outline:hover {
    background-color: $secondary-color;
    color: $secondary-color-contrast;
  }
}
</style>