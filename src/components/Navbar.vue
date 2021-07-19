<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark custom-navbar">
      <div class="container-fluid">
        <h3>
          <a class="navbar-brand" href="#"
            ><i class="bi bi-globe2"></i> Touring Club Italiano</a
          >
        </h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">
                <i class="bi bi-house-fill pe-2"></i>Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/search-location"
              >
                <i class="bi bi-search pe-2"></i>Cerca la tua località
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Principali località
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/location-details/roma"
                    >Roma</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/location-details/venezia"
                    >Venezia</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="/location-details/firenze"
                    >Firenze</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$navbar-background: #00305f;

.custom-navbar {
  background-color: $navbar-background;
}
</style>
