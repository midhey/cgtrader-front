<template>
  <nav class="navbar navbar-expand-md navigation-block">
    <div class="container">
      <a class="navbar-brand brand-font" href="#">RusCGStore</a>

      <div class="d-flex">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse div-search-form" id="navbarSupportedContent">
          <form class="search-form d-flex align-items-center">
            <img class="icon" src="@/assets/icons/Search.svg" alt="Heart Icon"/>
            <input type="text" class="search-form-input" placeholder="Поиск" aria-label="Search"
                   aria-describedby="basic-addon1">
          </form>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img class="icon" src="@/assets/icons/Favorites.svg" alt="Heart Icon"/>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >
                <img class="icon" src="@/assets/icons/Cart.svg" alt="Heart Icon"/>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" :id="'navbarDropdown' + ($store.getters.isAuthenticated ? 'Auth' : 'NonAuth')" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img class="icon" src="@/assets/icons/User.svg" alt="Heart Icon"/>
              </a>
              <div v-if="$store.getters.isAuthenticated" class="dropdown-menu" data-bs-target="#" aria-labelledby="navbarDropdownAuth">
                <a class="dropdown-item" href="#" @click="goToProfile">Профиль</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click="userLogout">Выйти из аккаунта</a>
              </div>
              <div v-else class="dropdown-menu" aria-labelledby="navbarDropdownNonAuth">
                <a class="dropdown-item" href="#" @click="openLoginModal">Вход</a>
                <a class="dropdown-item" href="#">Регистрация</a>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </nav>


  <login-component  :is-visible="isLoginVisible" :on-close="closeLoginModal" />

</template>

<script>
import LoginComponent from '@/components/auth/LoginComponent.vue';
export default {
  components: {
    LoginComponent,
  },
  data() {
    return {
      isLoginVisible: false,
    };
  },
  methods: {
    openLoginModal() {
      this.isLoginVisible = true;
    },
    closeLoginModal() {
      this.isLoginVisible = false;
    },
    userLogout() {
      this.$store.dispatch('logout')
    },
    goToProfile() {
      // Вызываете программный переход по маршруту /profile
      this.$router.push('/profile');
    }
  },
};
</script>

<style scoped>
.brand-font {
  font-family: 'Lexend Zetta', sans-serif;
}

.navigation-block {
  background: #F6F6F6;
}

.icon {
  filter: grayscale(100%); /* начальный цвет иконки в оттенках серого */
  transition: filter 0.3s; /* добавим плавный переход для изменения цвета */
}

.icon:hover {
  filter: none; /* отменяем фильтр при наведении, возвращая цвет в исходное состояние */
}
.div-search-form {
  margin-right: 30px;
}

.search-form {
  background-color: #ffffff;
  height: 42px;
  width: 300px;
  padding-left: 15px;
  border-radius: 10px;
}

.search-form-input, .search-form-input:focus {
  border: 0;
  outline: none;
}

</style>