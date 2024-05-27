<template>
  <div class="hystmodal" id="loginModal" >
    <div class="hystmodal__wrap" >
      <div class="hystmodal__window" role="dialog" aria-modal="true" >
        <button class="hystmodal__close" data-hystclose>Закрыть</button>
        <div class="hystmodal__logo">
          <img src="@/assets/logo.png" alt="RUSCGSTORE">
        </div>
        <div class="hystmodal__content">
          <div class="hystmodal__title">
            ВХОД
          </div>
          <div class="hystmodal__description">
            Ещё нет учетной записи? <span style="color: blue; cursor: pointer">Регистрация</span>
          </div>
          <form @submit.prevent="signIn" class="hystmodal__form">
            <label for="" class="hystmodal__input">
              <input v-model="login" type="text" name="login" placeholder="Введите логин">
            </label>
            <label for="" class="hystmodal__input" >
              <input v-model="password" type="password" name="password" placeholder="Введите пароль">
            </label>
            <button type="submit" class="hystmodal__submit">
              Войти
            </button>
            {{ errorMessage }}
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async signIn() {
      try {
        const response = await axios.post("http://localhost:8070/auth/sign_in", {
          login: this.login,
          password: this.password,
        });
        const token = response.data.token;
        localStorage.setItem("token", token);
        this.errorMessage = "";
        window.location.reload();
      } catch (e) {
        this.errorMessage = "Ошибка при попытке входа";
      }
    },
  },
};
</script>


<style scoped lang="scss">

.hystmodal {
  &__wrap {
  }

  &__window {
    border-radius: 16px;
    border: 1px solid #D3D3D3;
    background: #FFF;
    box-shadow: 7px 4px 15.5px 6px rgba(0, 0, 0, 0.25);
    padding: 35px 15px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__close {
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    color: #000;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
    text-transform: uppercase;
  }

  &__description {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.14; /* 114.286% */
    margin-bottom: 50px;
  }

  &__form {
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__input {
    width: 100%;
    input {
      border-radius: 4px;
      border: 1px solid #D3D3D3;
      background: #FDFDFD;
      width: 100%;
    }
  }

  &__submit {
    width: 100%;
    margin-top: 25px;
    border-radius: 4px;
    background: #000;
    color: #fff;
    padding: 16px;
    transition: background-color .3s ease;
    will-change: background-color;

    &:hover {
      background-color: #383838;
    }
  }
}

</style>