<template>
  <v-app>
    <app-header @drawer="mostrar"/>
    <app-drawer :mostrar="drawer" v-model="drawer"/> 
    <app-view/>
  </v-app>
</template>
<script>
import appHeader from '@/layout/AppHeader.vue';
import appView from '@/layout/AppView.vue';
import AppDrawer from '@/layout/AppDrawer.vue';

export default {
  components: {
    appHeader,
    appView,
    AppDrawer,
  },
  data() {
    return {
      drawer: false
    }
  },
  methods: {
    mostrar(val){
      this.drawer = val;
    }
  }
}
</script>
