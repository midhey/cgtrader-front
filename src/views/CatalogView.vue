<template>
  <SidebarComponent :minPrice="minPrice" :maxPrice="maxPrice"/>
  <div class="container">
    <CatalogContentComponent/>
  </div>
</template>

<script>
import CatalogContentComponent from '@/components/CatalogPage/ContentComponent.vue';

export default {

  name: 'CatalogView',
  components: {
    CatalogContentComponent,
  },
  data() {
    return {
      models: []
    }
  },
}
</script>

<style scoped>
.container {
  padding: 50px 0;
}
</style>
