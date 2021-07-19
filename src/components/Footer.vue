<template>
  <footer class="text-center text-lg-start footer-bg">
    <section
      class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      "
    >
      <div class="me-5 d-none d-lg-block">
        <span>Resta in contatto con i nostri social:</span>
      </div>
      <div>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="bi bi-instagram"></i>
        </a>
      </div>
    </section>
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Touring Club Italiano</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, quos cum. Quos quis tempore asperiores obcaecati
              corporis reiciendis sequi ipsa veniam, voluptate veritatis, cum
              quasi adipisci voluptates alias nesciunt non.
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Link Utili</h6>
            <p>
              <a href="/home" class="text-reset">Home</a>
            </p>
            <p>
              <a href="/find-locations" class="text-reset"
                >Trova la tua località</a
              >
            </p>
            <p>
              <a href="locations" class="text-reset">Località</a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contatti</h6>
            <p><i class="bi bi-house-fill"></i> Indirizzo</p>
            <p>
              <i class="bi bi-envelope-fill"></i>
              info@touringclubitaliano.it
            </p>
            <p><i class="bi bi-telephone-fill"></i> + 39 000001034</p>
            <p><i class="bi bi-printer-fill"></i> + 39 000001034</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4 footer-bg-bottom">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="">Touring Club Italiano</a>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$footer-background: #175592;
$navbar-background: #00305f;

footer {
  color: #fff;
}

.footer-bg {
  background-color: $footer-background;
}

.footer-bg-bottom {
  background-color: $navbar-background;
}
</style>
