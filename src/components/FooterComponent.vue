<template>
  <footer class="footer">
    <div class="container">

      <div class="navigation">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" alt="RusCGStore">
        </router-link>
        <nav>
          <div class="nav-title">Навигация</div>
          <router-link to="/">Главная</router-link>
          <router-link to="/favourites">Избранное</router-link>
          <router-link to="/cart">Корзина</router-link>
          <router-link to="/profile">Профиль</router-link>
        </nav>
        <div class="contacts">
          <div class="contacts-block">
            <a href="#">admin@cgstore.ru</a>
            <div>Контактная почта</div>
          </div>
          <div class="contacts-block">
            <a href="#">+7 (908) 225-80-89</a>
            <div>Сервисная поддержка</div>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>

footer.footer {
  background: #000;
}

.footer {
  .container {
    padding: 100px 0;
    .logo {
      img {
        filter: invert(100%);
      }
    }
  }
}

.navigation {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 45px;

  nav {
    display: flex;
    flex-direction: column;
    color: white;
    width: max-content;
    gap: 10px;

    .nav-title {
      color: #FFF;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 21.6px */
      letter-spacing: 0.36px;
    }

    a {
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
    }
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .contacts-block {
      display: flex;
      flex-direction: column;

      div {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        color: #FEFEFE;
      }

      a {
        color: #FEFEFE;
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        transition: color .3s ease-in-out;

        &:hover {
          color: #3e56ce;
        }
      }

    }
  }
}






</style>