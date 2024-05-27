<template>
  <div class="profile">
    <div class="profile__header container">
      <div class="profile__img">
        <img src="@/assets/user-thumb.png" alt="Фотография">
        <div class="profile__add-img-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
            <path d="M31 5.66182V21.5673C30.9983 22.2119 30.745 22.8297 30.2956 23.2856C29.8461 23.7414 29.237 23.9983 28.6013 24H2.39868C1.76304 23.9983 1.15391 23.7414 0.704439 23.2856C0.254968 22.8297 0.00170339 22.2119 0 21.5673V5.66182C0.00170339 5.01715 0.254968 4.39938 0.704439 3.94353C1.15391 3.48768 1.76304 3.23082 2.39868 3.22909H8.64171V2.43273C8.64341 1.78806 8.89667 1.17029 9.34615 0.714438C9.79562 0.258587 10.4047 0.00172757 11.0404 0H19.9596C20.5953 0.00172757 21.2044 0.258587 21.6539 0.714438C22.1033 1.17029 22.3566 1.78806 22.3583 2.43273V3.22909H28.6013C29.237 3.23082 29.8461 3.48768 30.2956 3.94353C30.745 4.39938 30.9983 5.01715 31 5.66182ZM22.8488 13.6145C22.8488 12.1405 22.4178 10.6995 21.6103 9.47383C20.8028 8.24818 19.6551 7.29289 18.3123 6.72879C16.9694 6.16468 15.4918 6.01708 14.0663 6.30466C12.6408 6.59224 11.3314 7.30208 10.3036 8.34442C9.27588 9.38675 8.57597 10.7148 8.29242 12.1605C8.00886 13.6063 8.15439 15.1048 8.71061 16.4667C9.26682 17.8286 10.2087 18.9926 11.4172 19.8116C12.6257 20.6305 14.0465 21.0676 15.5 21.0676C17.449 21.0676 19.3182 20.2824 20.6964 18.8847C22.0745 17.487 22.8488 15.5912 22.8488 13.6145ZM19.0001 10.0625C19.8104 10.8834 20.315 11.9638 20.4279 13.1197C20.5408 14.2755 20.255 15.4354 19.6193 16.4015C18.9835 17.3676 18.0371 18.0802 16.9413 18.418C15.8455 18.7557 14.6681 18.6977 13.6098 18.2537C12.5515 17.8097 11.6777 17.0073 11.1374 15.9832C10.5971 14.959 10.4236 13.7766 10.6465 12.6373C10.8695 11.498 11.475 10.4723 12.36 9.73507C13.245 8.99783 14.3547 8.59463 15.5 8.59418C16.1503 8.59242 16.7945 8.72148 17.3953 8.9739C17.9961 9.22632 18.5416 9.59708 19.0001 10.0647V10.0625ZM17.6169 2.94545C17.6164 3.18634 17.6865 3.42193 17.8181 3.62243C17.9498 3.82293 18.1371 3.97931 18.3564 4.07179C18.5757 4.16427 18.8171 4.18869 19.0501 4.14196C19.2831 4.09523 19.4972 3.97946 19.6653 3.80928C19.8334 3.6391 19.948 3.42218 19.9945 3.18595C20.041 2.94973 20.0173 2.70483 19.9265 2.48224C19.8357 2.25965 19.6819 2.06938 19.4844 1.93551C19.287 1.80164 19.0548 1.73018 18.8173 1.73018C18.4993 1.73018 18.1943 1.85815 17.9692 2.08599C17.7442 2.31384 17.6174 2.62294 17.6169 2.94545Z" fill="black"/>
          </svg>
        </div>
      </div>
      <div class="profile__login">
        {{this.login}}
      </div>
    </div>
    <div class="profile-info">
      <div class="profile-info__item">
        <div class="profile-info__label">Роль:</div>
        <div class="profile-info__value">
          {{this.role}}
        </div>
      </div>
      <div class="profile-info__item">
        <div class="profile-info__label">Почта:</div>
        <div class="profile-info__value">
          {{this.email}}
        </div>
      </div>
      <div class="profile-info__item">
        <div class="profile-info__label">Телефон:</div>
        <div class="profile-info__value">
          {{this.phone}}
        </div>
      </div>
      <div class="profile-info__item">
        <div class="profile-info__label">
          День рождения:
        </div>
        <div class="profile-info__value">
          {{this.birthday}}
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
      login: 'cgStoreUser',
      role: 'Пользователь',
      email: 'user@cgstore.ru',
      phone: '+7 (999) 999-99-99',
      birthday: '10.10.2010'
    }
  },
  methods: {
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
            this.login      = response.data.data.login;
            this.role       = response.data.data.role;
            if (response.data.data.email != '') {
              this.email      = response.data.data.email;
            }
            if (response.data.data.phone != '') {
              this.phone      = response.data.data.phone;
            }
            if (response.data.data.birthday != '') {
              this.birthday   = response.data.data.birthday;
            }
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
    this.loadProfile()
  }

}
</script>

<style lang="scss">
.profile {
  margin: 50px 10px;
  border-radius: 8px;
  border: 1px solid #DEDEDE;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__header {
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 767px) {
      flex-direction: column;
    }
  }

  &__img {
    width: 120px;
    height: 120px;
    background-color: #D9D9D9;
    border-radius: 50%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
  }

  &__add-img-btn {
    width: 40px;
    height: 40px;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color .3s ease;
    will-change: background-color;
    position: absolute;
    bottom: -5px;
    right: 5px;

    &:hover {
      background-color: #3b3b3b;
    }

    svg {
      path {
        fill: white;
      }
    }
  }

  &__login {
    color: #000;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.1;
  }
}

.profile-info {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 15px;

  &__item {
    flex-basis: calc(50% - 15px);
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 767px) {
      flex: 100%;
    }
  }

  &__label {
    color: #424242;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1; /* 211.111% */
  }

  &__value {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    line-height: 1; /* 80% */
  }
}
</style>