<template>
  <v-app>
    <app-header/>
    <app-view/>
  </v-app>
</template>
<script>
import appHeader from '@/layout/AppHeader.vue';
import appView from '@/layout/AppView.vue';

export default {
  components: {
    appHeader,
    appView,
  },
  data() {
    return {

    }
  }
}
</script>
