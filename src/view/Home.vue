<template>
  <main class="py-5">
    <h2>Home</h2>
    <Button
      @click="goToSearchPage"
      content="Vai alla pagina della ricerca delle località"
    />
  </main>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    function goToSearchPage() {
      router.push("/search-location");
    }

    return {
      goToSearchPage,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>