<template>

  <div class="catalog">
    <div class="catalog-filter">
      <div class="catalog-filter__item dropdown">
        <div class="catalog-filter__label dropdown-trigger">Цена</div>
        <div ref="slider" class="catalog-filter__price-slider"></div>
        <div class="catalog-filter__price-inputs">
          <div class="catalog-filter__input-block">
            <span>От</span>
            <input type="number" v-model="minPrice" @input="updateSliderFromInput(0, minPrice)">
          </div>
          <div class="catalog-filter__input-block">
            <span>До</span>
            <input type="number" v-model="maxPrice" @input="updateSliderFromInput(1, maxPrice)">
          </div>
        </div>
      </div>
    </div>
    <div class="catalog__container">
      <div class="catalog__header">
        <div class="catalog__filter">

        </div>
        <div class="catalog__founded-items">
          Найдено: <span>{{filteredModels.length}}</span>
        </div>
      </div>
      <div class="catalog__list">
        <div class="catalog-item" v-for="item in filteredModels" :key="item.id">
          <div class="catalog-item__image">
            <img src="@/assets/model-thumb.png" alt="{{item.name}}">
            <div class="catalog-item__favourite-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <router-link :to="'/model/' + item.id" class="catalog-item__info">
            <div class="catalog-item__title">
              {{ item.name }}
            </div>
            <div class="catalog-item__price">
              {{ item.cost }}₽
            </div>
            <div class="catalog-item__cart-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.min.css';
import apiInstance from "@/utils/axios";

export default {
  data() {
    return {
      models: [],
      filteredModels: [],
      minPrice: 0,
      maxPrice: 0
    }
  },
  methods: {
    async fetchModels() {
      try {
        const modelsResponse = await apiInstance.get("models/all");
        this.models = modelsResponse.data.data;
        this.filteredModels = this.models; // Initialize filteredModels with all models
        console.log(this.filteredModels);
        this.calculatePriceRange();
      } catch (e) {
        console.error("Ошибка при получении списка моделей:", e);
      }
    },
    calculatePriceRange() {
      const prices = this.models.map(model => model.cost);
      this.minPrice = Math.min(...prices);
      this.maxPrice = Math.max(...prices);
      this.initSlider();
    },
    initSlider() {
      const slider = this.$refs.slider;
      noUiSlider.create(slider, {
        start: [this.minPrice, this.maxPrice],
        connect: true,
        range: {
          min: this.minPrice,
          max: this.maxPrice
        }
      });

      slider.noUiSlider.on('update', (values, handle) => {
        if (handle === 0) {
          this.minPrice = Math.round(values[0]);
        } else {
          this.maxPrice = Math.round(values[1]);
        }
        this.filterByPrice();
      });
    },
    updateSliderFromInput(handle, value) {
      const slider = this.$refs.slider;
      let values = slider.noUiSlider.get();
      values[handle] = value;
      slider.noUiSlider.set(values);
    },
    filterByPrice() {
      this.filteredModels = this.models.filter(model => {
        return model.cost >= this.minPrice && model.cost <= this.maxPrice;
      });
    },
    dropdown() {
      const dropdowns = document.querySelectorAll(".dropdown");

      dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector(".dropdown-trigger");
        const content = dropdown.querySelector(".dropdown-content");

        trigger.addEventListener("click", () => {
          content.classList.toggle("active");
        });
      });
    }
  },
  mounted() {
    this.fetchModels();
  }
}
</script>

<style lang="scss">

.catalog {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1;
  }

  &__header {
    display: grid;
  }

  &__founded-items {
    justify-self: flex-end;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}

.catalog-item {
  border-radius: 6px;
  background: #F6F6F6;
  min-width: 260px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 8px;

  &__image {
    position: relative;
    max-width: 240px;
    width: 100%;
    background-color: #FEFEFE;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__favourite-button {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      svg {
        fill: #3e56ce;
      }
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &:before {
      content: "";
      border-top: 2px solid #cecece;
      margin: 5px 0;
    }
  }

  &__title {
    color: #000;
    font-size: 20px;
    font-weight: 400;
  }

  &__price {
    color: #000;
    font-size: 24px;
    font-weight: 600;
  }

  &__cart-button {
    background-color: black;
    border-radius: 6px;
    padding: 2px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    transition: background-color .3s ease;
    will-change: background-color;
    position: absolute;
    right: 0;
    bottom: 0;

    svg {
      filter: invert(1);
      transition: filter .3s ease-in-out;
      will-change: filter;
    }

    &:hover {
      background-color: #ffffff;
      & svg {
        filter: invert(0);
      }
    }
  }
}

.catalog-filter {
  max-width: 250px;
  width: 100%;

  &__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__label {
    padding-bottom: 15px;
    border-bottom: 1px solid #989898;
  }

  &__price-slider {

    &.noUi-horizontal {
      height: 8px;
    }

    &.noUi-target {
      background-color: #989898;
      box-shadow: none;
      border: none;
      border-radius: 0;
    }

    & .noUi-origin {
      width: calc(100% - 17px);
    }

    .noUi-connect {
      background-color: black;
    }

    .noUi-handle {
      background-color: black;
      border: none;
      box-shadow: none;
      width: 20px;
      height: 20px;
      right: -1px;
      border-radius: 50%;

      &::after, &::before {
        display: none;
      }
    }
  }

  &__price-inputs {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;

    input {
      max-width: 90%;
    }
  }

  &__input-block {
    display: flex;
    gap: 5px;
    flex: 1;
    border-radius: 6px;
    border: 1px solid #989898;
    background: #FFF;
    padding: 8px;
    box-sizing: border-box;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    max-width: 110px;

    span {
      color: #989898;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.3; /* 133.333% */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}


</style>