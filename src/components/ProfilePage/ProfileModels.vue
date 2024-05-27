<template>
  <div class="profile-models container" v-if="models.length > 0">
    <div class="profile-models__title">
      Ваши модели
    </div>
    <div class="profile-models__content">
      <div class="profile-models__list">
        <div class="catalog-item" v-for="item in models" :key="item.id">
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
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiInstance from "@/utils/axios";

export default {
  data() {
    return {
      models: []
    }
  },
  methods: {
    async getModels() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await apiInstance.get("profile/models", {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          if (response.status === 200) {
            this.models = response.data.data;
          }
          console.log(this.models);
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getModels()
  }
}
</script>

<style lang="scss">
.profile-models {
  margin-bottom: 70px;
  &__title {
    font-size: 25px;
    margin-bottom: 10px;
  }

  &__content {
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 20px;
  }
}

.catalog-item {
  &__image {
  }

  &__favourite-button {
  }

  &__info {
  }

  &__title {
  }

  &__price {
  }
}
</style>