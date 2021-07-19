<template>
  <main class="py-5">
    <h2>Dettaglio località</h2>
    <Button
      @click="goToSearchPage"
      content="Vai alla pagina di ricerca delle località"
    />

    <Button @click="goCartPage" content="vai al carrello" />
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

    function goCartPage() {
      router.push("/cart");
    }

    return {
      goToSearchPage,
      goCartPage,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>