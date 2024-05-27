<template>
  <header class="header">
    <div class="container">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="RusCGStore">
      </router-link>


      <div class="header-right-block">
        <form action="">
          <input type="search" placeholder="Поиск">
        </form>
        <nav class="icon-menu" v-if="isAuthorized">
          <router-link to="/favourites">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <router-link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="login__dropdown">
            <router-link to="/profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
          </div>
        </nav>
        <nav v-else>
          <div class="loginButton" @click="openModal">Войти</div>
        </nav>
      </div>
    </div>
  </header>
  <LoginComponent/>
</template>

<script>
import HystModal from 'hystmodal';
import "/node_modules/hystmodal/dist/hystmodal.min.css";
import LoginComponent from "@/components/LoginComponent.vue"
import apiInstance from "@/utils/axios";

export default {
  name: 'HeaderComponent',
  components: {
    'LoginComponent': LoginComponent
  },
  data() {
    return {
      modal: null,
      isAuthorized: '',
      login: ''
    };
  },
  methods: {
    openModal() {
      this.modal.open('#loginModal');
    },
    async loadProfile() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await apiInstance.get('profile', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          if (response.status === 200) {
            this.isAuthorized = true;
            this.login = response.data.data.login;
          } else {
            localStorage.removeItem("token")
            this.isAuthorized = false;
          }
        } catch (error) {
          console.error("Ошибка при загрузке профиля:", error);
        }
      }
    }
  },
  mounted() {
    this.modal = new HystModal({
      linkAttributeName: 'data-hystmodal',
      catchFocus: true,
      waitTransitions: true,
      closeOnEsc: true,
      closeOnButton: true
    });
    this.loadProfile();
  },

};
</script>

<style lang="scss">

.header {
  background-color: #F6F6F6;
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 29;
}

.header .container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.icon-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.icon-menu a {
  width: 45px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
  transition: background-color .3s ease;
  will-change: background-color;

  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    background: #e3e3e3;
  }
}

.header-right-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}

form {
  input {
    display: flex;
    width: 298px;
    height: 42px;
    padding: 16px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #FFF;

    &::before {
      content: "";
      width: 24px;
      height: 24px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z' stroke='%23989898' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
    }
  }
}

.loginButton {
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #e7e7e7;
  padding: 8px 15px;
  border-radius: 25px;
  transition: background-color .3s ease;
  will-change: background-color;

  &:hover {
    background-color: #c9c9c9;
  }

  &::before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'%3E%3Cpath d='M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
    width: 25px;
    height: 25px;
  }
}

</style>