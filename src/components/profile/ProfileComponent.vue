<template>
  <main class="container main mt-5 p-5">
    <div class="d-flex flex-row align-items-center col-12">
      <div class="avatar">

      </div>
      <p v-if="profile" class="login">{{ profile.login }}</p>
    </div>
    <div class="row mt-5">
      <div class="d-flex flex-column col-6">
        <p class="label-data">Email:</p>
        <p v-if="profile" class="data">{{ profile.email }}</p>
      </div>
      <div class="d-flex flex-column col-6">
        <p class="label-data">Телефон:</p>
        <p v-if="profile" class="data">{{ profile.phone || 'Нет данных' }}</p>
      </div>
      <div class="d-flex flex-column col-6">
        <p class="label-data">Дата рождения:</p>
        <p v-if="profile" class="data">{{ profile.birthday || 'Нет данных' }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      profile: null,
    };
  },
  async created() {
    try {
      // Получаем токен из хранилища (пример: localStorage)
      const token = this.$store.getters.getToken;
      console.log(token);

      // Если есть токен, устанавливаем его в заголовок Axios
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      }

      // Выполняем запрос к API при создании компонента
      const response = await axios.get('http://localhost:8080/profile');
      this.profile = response.data.data;
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  },
};
</script>

<style>

.main {
  border: 2px solid #D9D9D9;
  border-radius: 5px;
}

.avatar {
  height: 150px;
  width: 150px;
  background-color: #D9D9D9;
  border-radius: 50%;
}

.login {
  margin-left: 50px;
  font-size: 36px;
}

.label-data {
  font-size: 12px;
  color: #424242;
  margin: 0;
}

.data {
  font-size: 20px;
  color: black;
}
</style>
