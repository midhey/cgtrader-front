<template>
  <div class="model">
    <div class="model__container">
      <div class="model__title">
        {{model.name}}
      </div>
      <div class="model-main">
        <div class="model-main__images">
          <img src="@/assets/model-thumb.png" alt="">
        </div>
        <div class="model-main__info">
          <div class="model-main__characteristics">
            <div class="model-main__chars-label">
              Характеристики
            </div>
            <div class="model-chars__list">
              <div class="model-chars__item">
                <div class="model-chars__label">
                  Автор
                </div>
                <div class="model-chars__value">
                  {{model.author_login}}
                </div>
              </div>
              <div class="model-chars__item">
                <div class="model-chars__label">
                  Опубликовано
                </div>
                <div class="model-chars__value">
                  {{this.date}}
                </div>
              </div>
              <div class="model-chars__item">
                <div class="model-chars__label">
                  Полигоны
                </div>
                <div class="model-chars__value">
                  {{model.polygons}}
                </div>
              </div>
              <div class="model-chars__item">
                <div class="model-chars__label">
                  Вертикали
                </div>
                <div class="model-chars__value">
                  {{model.vertices}}
                </div>
              </div>
            </div>
          </div>
          <div class="model-main__price">
            <div class="model-price__price">
              {{model.cost}}₽
            </div>
            <div class="model-price__favourites-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.93415 18.5443L15.3152 27.3568C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3568L26.0657 18.5443C28.6739 16.0941 28.9907 12.0621 26.797 9.23477L26.3845 8.70313C23.7603 5.32078 18.4928 5.88803 16.6488 9.75154C16.3883 10.2973 15.6115 10.2973 15.351 9.75154C13.5071 5.88803 8.23955 5.32078 5.61531 8.70313L5.20284 9.23477C3.00918 12.0621 3.32592 16.0941 5.93415 18.5443Z" stroke="black" stroke-opacity="0.77" stroke-width="1.4"/>
              </svg>
            </div>
            <div class="model-price__cart-button">
              Добавить в корзину
            </div>
          </div>
        </div>
      </div>
      <div class="model__bottom">
        <div class="model-description">
          <div class="model-description__label">Дополнительное описание товара</div>
          <div class="model-description__value">
            {{model.description}}
          </div>
        </div>
        <div class="model-author">
          <div class="model-author__label">
            Продавец
          </div>
          <div class="model-author__author">
            {{model.author_login}}
          </div>
          <div class="model-author__rating" >
            <svg v-for="index in 5" :key="index" xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
              <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#D9D9D9"/>
            </svg>
            (0 отзывов)
          </div>
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
      model: [],
      date: ''
    }
  },
  methods: {
    async fetchModel() {
      try {
        const response = await apiInstance.get("models/" + this.$route.params.id);
        if (response.status === 200) {
          this.model = response.data.data;
          const dateObj = new Date(this.model.p_date);
          this.date = dateObj.toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
        }
      }
      catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchModel();
  }
}
</script>

<style lang="scss">
.model {
  &__container {
  }

  &__title {
    color: #000;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    margin: 50px 0;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 70px 0;
    @media (max-width: 950px) {
      flex-direction: column;
      gap: 40px;
      justify-content: center;
    }
    gap: 15px 70px ;
  }
}

.model-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  
  @media (max-width: 950px) {
    justify-content: center;
  }

  &__images {
    max-width: 600px;
    width: 100%;
    max-height: 550px;
    background-color: #d5d5d5;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 330px;
    width: 100%;
  }

  &__characteristics {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__chars-label {
    color: #000;
    font-size: 18px;
    font-weight: 400;
  }

  &__price {
    border-radius: 4px;
    border: 1px solid #DEDEDE;
    background: #FFF;
    position: relative;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}

.model-chars {
  &__list {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    gap: 20px;
    border: 1px solid #DEDEDE;
    background: #FFF;
    padding: 20px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
  }

  &__label {
    color: #474747;
    font-size: 18px;
    font-weight: 400;
  }

  &__value {
    color: #000;
    font-size: 18px;
    font-weight: 500;
  }
}

.model-price {
  &__price {
    color: #000;
    font-size: 36px;
    font-weight: 600;
  }

  &__favourites-button {
    position: absolute;
    right: 20px;
    top: 40px;
    cursor: pointer;

    &:hover {
      svg {
        path {
          fill: #cb1818;
        }
      }
    }
  }

  &__cart-button {
    border-radius: 4px;
    background: #000;
    display: flex;
    color: white;
    cursor: pointer;
    padding: 15px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    transition: background-color .3s ease;
    will-change: background-color;

    &:hover {
      background-color: #424242;
    }
  }
}

.model-description {
  display: flex;
  gap: 25px;
  flex-direction: column;
  flex: 1 0 0;

  &__label {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
  }

  &__value {
    color: #000;
    text-align: left;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.3;
  }
}

.model-author {
  border-radius: 4px;
  border: 1px solid #DEDEDE;
  background: #FFF;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 330px;
  width: 100%;
  padding: 20px;
  height: max-content;

  &__label {
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
  }

  &__author {
    color: #3B00B9;
    font-size: 24px;
    font-weight: 600;
    line-height: 1;
  }

  &__rating {
    display: flex;
    gap: 3px;
  }
}
</style>