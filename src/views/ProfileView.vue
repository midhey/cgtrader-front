<!-- views/HomeView.vue -->
<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <Profile />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/HeaderComponent.vue';
import Profile from '@/components/profile/ProfileComponent.vue'
import Footer from '@/components/home/FooterComponent.vue';

export default {
  components: {
    Header,
    Profile,
    Footer
  },
  // другой код для главной страницы, если необходимо
};
</script>

<style scoped>
/* стили для главной страницы */
</style>