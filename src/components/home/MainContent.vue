<template>
  <div class="col-12 col-md-7 col-lg-9 mt-5">
    <p>Найдено: {{ number_of_found }}</p>
    <div v-if="loading" class="row justify-content-center mt-5">
      <span class="loader"></span>
    </div>
    <div v-else class="row">
      <div v-for="model in models" :key="model.id" class="col-12 col-md-6 col-lg-4">
        <div class="col-12 model-img">
          <a class="model-favourite" href="#">
            <img class="icon" src="@/assets/icons/Favorites.svg" alt="Heart Icon"/>
          </a>
          <img src="@/assets/placeholder.jpg" alt="{{model.description}}" class="img-fluid">
        </div>
        <p class="model-name">{{ model.name }}</p>
        <p class="model-price">{{ model.cost }}₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      loading: true,
      number_of_found: 0,
      models: []
    };
  },
  mounted() {
    this.fetchModels();
  },

  methods: {
    async fetchModels() {
      try {
        this.loading = true;
        const response = await this.$api.get('/models/all');
        this.number_of_found = response.data.number_of_found;
        this.models = response.data.data
      } catch (error) {
        console.error('Error fetching models:', error);
      } finally {
        this.loading = false; // Сброс состояния загрузки после завершения запроса
      }
    },
  },
  // Дополнительные методы и логика компонента
};

</script>

<style scoped>
.model-name {
  font-size: 20px;
  margin: 0;
}

.model-img {
  position: relative;
}

.model-favourite {
  position: absolute;
  right: 0;
  top: 0;
  filter: invert(100%);
}

.model-favourite img {
  width: 40px;
  height: 40px;
}

.model-price {
  font-size: 24px;
  font-weight: 700;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #000000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>