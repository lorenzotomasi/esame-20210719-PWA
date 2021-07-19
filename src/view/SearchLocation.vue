<template>
  <main class="py-5">
    <section class="mb-5">
      <div class="d-flex justify-content-center">
        <div class="card p-3 main-form">
          <h3 class="card-title">Cerca la tua località</h3>
          <div class="card-body d-flex justify-content-evenly">
            <div class="flex-sm-grow-1 me-2">
              <label for="localita" class="form-label">Località</label>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="localita"
                  ><i class="bi bi-building"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Località"
                  aria-describedby="addon-wrapping"
                  @input="updateInputLocation"
                />
              </div>
            </div>
            <div class="flex-sm-grow-1 ms-2">
              <label for="localita" class="form-label">Giorno</label>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="bi bi-calendar"></i
                ></span>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Località"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>
          <div class="card-body d-flex justify-content-center">
            <div class="flex-sm-grow-1">
              <label for="localita" class="form-label">Interessi</label>
              <div class="input-group flex-nowrap">
                <div class="input-group mb-3">
                  <label class="input-group-text" for="inputGroupSelect01"
                    >Options</label
                  >
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Interessi</option>
                    <option value="Storico">Storico</option>
                    <option value="Paesagistico">Paesagistico</option>
                    <option value="Artistico">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body d-flex justify-content-center">
            <Button @click="searchLocation" content="Cerca"
              ><i class="bi bi-search pe-2"></i
            ></Button>
          </div>
        </div>
      </div>
    </section>
    <section v-if="popularLocation.length != 0">
      <div class="ms-4">
        <h3>Località del momento</h3>
      </div>
      <div v-for="location in popularLocation" :key="location.id">
        <div class="d-flex justify-content-center mt-5">
          <div class="card mb-3 horizontal-card mx-5">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/colosseo.jpg"
                  class="img-fluid rounded-start"
                  :alt="location.name"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ location.name }}</h5>
                  <p class="card-text d-flex justify-content-between">
                    {{ location.description }}
                  </p>
                  <Button
                    content="Scopri di più"
                    semantic="primary"
                    variant="outline"
                    @click="goToDetails(location.id)"
                  />
                  <p class="card-text d-flex justify-content-between mt-4">
                    <small class="text-muted">
                      <i class="bi bi-hourglass-split pe-2"></i
                      >{{ location.waitingTime }} minuti
                    </small>
                    <small class="text-muted">
                      <i class="bi bi-person-fill pe-2"></i
                      >{{ location.averagePersonNumber }} in media
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="filterLocation.lenght != 0">
      <div class="ms-4">
        <h3>Risultati ricerca</h3>
      </div>
      <div v-for="location in filterLocation" :key="location.id">
        <div class="d-flex justify-content-center mt-5">
          <div class="card mb-3 horizontal-card mx-5">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/colosseo.jpg"
                  class="img-fluid rounded-start"
                  :alt="location.name"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ location.name }}</h5>
                  <p class="card-text d-flex justify-content-between">
                    {{ location.description }}
                  </p>
                  <Button
                    content="Scopri di più"
                    semantic="primary"
                    variant="outline"
                    @click="goToDetails(location.id)"
                  />
                  <p class="card-text d-flex justify-content-between mt-4">
                    <small class="text-muted">
                      <i class="bi bi-hourglass-split pe-2"></i
                      >{{ location.waitingTime }} minuti
                    </small>
                    <small class="text-muted">
                      <i class="bi bi-person-fill pe-2"></i
                      >{{ location.averagePersonNumber }} in media
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { defineComponent, onMounted, ref } from "vue";
import { ILocation } from "@/interface/ILocation";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const popularLocation = ref<ILocation[]>([]);
    const filterLocation = ref<ILocation[]>([]);
    const handleInputLocation = ref<string>("");
    onMounted(async () => {
      await store.dispatch("getPopularLocation").then(() => {
        popularLocation.value = store.getters.locationGetters;
      });
    });

    function goToDetails(id: string) {
      router.push(`/location-details/${id}`);
    }

    function updateInputLocation(result: any) {
      handleInputLocation.value = result.target.value;
    }

    function searchLocation() {
      popularLocation.value = [];
      store
        .dispatch("getLocationFilter", handleInputLocation.value)
        .then(() => {
          filterLocation.value = store.getters.locationFilterGetters;
          console.log(filterLocation.value);
        });
    }
    return {
      popularLocation,
      goToDetails,
      handleInputLocation,
      updateInputLocation,
      searchLocation,
      filterLocation,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>