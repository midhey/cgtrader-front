<template>
  <div class="modal-background" v-if="isVisible">
    <div class="login-modal d-flex justify-content-center flex-column justify-content-center align-items-center col-11 col-md-6 col-lg-4">
      <a class="brand-font" href="#">RusCGStore</a>
      <p style="font-size: 32px; font-weight: 600; margin-bottom: 0; margin-top: 20px">ВХОД</p>
      <div class="d-flex flex-row">
        <p>Еще нет учетной записи? </p>
        <a href="#" style="text-decoration: none"> Регистрация</a>
      </div>
      <form @submit.prevent="signIn" class="text-center">
        <input v-model="login" type="text" name="login" placeholder="Введите логин" class="col-11 col-md-10 form-input">
        <input v-model="password" type="password" name="password" placeholder="Введите пароль" class="col-11 col-md-10 form-input">
        <button type="submit" class="col-11 col-md-10 form-submit">ВОЙТИ</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <a class="forgot-password" href="#">ЗАБЫЛИ ПАРОЛЬ?</a>
      <button class="login-close" @click="closeModal">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      login: '',
      password: '',
      errorMessage: '', // Новая переменная для хранения сообщения об ошибке
    };
  },
  methods: {
    async signIn() {
      try {
        // Вызов действия логина и передача логина и пароля
        const response = await this.$store.dispatch('login', {
          login: this.login,
          password: this.password,
        });

        // Закрыть модальное окно после успешного входа
        this.closeModal();

        console.log('Login successful:', response);
      } catch (error) {
        console.error('Error during login:', error);
        // Устанавливаем сообщение об ошибке для вывода на форме
        this.errorMessage = 'Неверный логин или пароль';
      }
    },
    closeModal() {
      // Сбрасываем сообщение об ошибке при закрытии модального окна
      this.errorMessage = '';
      this.onClose();
    },
  },
};
</script>


<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
.modal-background {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-modal {
  background-color: #FFF;
  border-radius: 15px;
  position: relative;
}

.login-close {
  border: 0;
  position: absolute;
  right: 0;
  top:0;
  background: none;
}

.brand-font {
  font-family: 'Lexend Zetta', sans-serif;
  text-decoration: none;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  margin-top: 35px;
}

.form-input {
  height: 44px;
  background-color: #FDFDFD;
  border: 1px solid #D3D3D3;
  border-radius: 5px;
  padding-left: 25px;
  margin-top: 20px;
}

.form-submit {
  font-size: 16px;
  height: 44px;
  background-color: black;
  color: white;
  margin-top: 40px;
  outline: none;
  border: 0;
  border-radius: 5px;
  transition: all 0.8s;
}

.form-submit:hover {
  background-color: #525252;
  color: #f1f1f1;
}

.forgot-password {
  font-size: 14px;
  color: #404040;
  margin-top: 20px;
  margin-bottom: 30px;
  text-decoration: none;
}

.forgot-password:hover {
  color: black;
}
</style>
