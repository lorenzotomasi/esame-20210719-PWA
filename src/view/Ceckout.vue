<template>
  <main class="py-5">
    <h2>Ceckout</h2>
    <Button @click="goToHomePage" content="Vai alla home" />
  </main>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function goToHomePage() {
      router.push("/home");
    }

    return {
      goToHomePage,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>