<template>
  <HeaderComponent/>
  <main class="container">
    <router-view/>
  </main>
  <FooterComponent/>

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
@import "@/assets/font/Montserrat/montserrat.css";
@import "@/assets/css/reset.css";

* {
  font-family: Montserrat;
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration: none;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main.container {
  flex-grow: 1;
  margin-top: 80px;
}

footer.footer {
  flex-shrink: 0;
}

.container {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: content-box;
}
</style>
