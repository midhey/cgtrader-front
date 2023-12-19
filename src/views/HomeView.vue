<!-- views/HomeView.vue -->
<template>
  <div>
    <Header />
    <div class="container">
      <div class="row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/HeaderComponent.vue';
import Sidebar from '@/components/home/SidebarComponent.vue';
import MainContent from '@/components/home/MainContent.vue';
import Footer from '@/components/home/FooterComponent.vue';

export default {
  components: {
    Header,
    Sidebar,
    MainContent,
    Footer
  },
  // другой код для главной страницы, если необходимо
};
</script>

<style scoped>
/* стили для главной страницы */
</style>