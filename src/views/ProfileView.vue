<template>
  <ProfileComponent/>
  <ProfileModels/>
</template>

<script>

import ProfileComponent from "@/components/ProfilePage/ProfileComponent.vue";
import ProfileModels from "@/components/ProfilePage/ProfileModels.vue";

export default {
  name: 'HomeView',
  components: {
    ProfileComponent,
    ProfileModels
  }
}
</script>
