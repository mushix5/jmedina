<template>
  <v-app-bar
    app
    color="white"
    persistent
  >
    <v-list-item class="ml-3">
      <v-list-item-content>
        <v-list-item-title class="titleApp">Jesús Medina Calderón</v-list-item-title>
        <v-list-item-subtitle class="subtitleApp">Desarrollador Full-Stack</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-spacer></v-spacer>
        <v-row justify="center" align="center"  class="mr-3">
          <v-col v-for="(item, index) in contacto" :key="index" cols="2" class="text-center hidden-sm-and-down">
            <v-btn icon :color="item.color" :href="item.url" target="_blank">
            <v-icon>{{item.icono}}</v-icon>
          </v-btn>
          </v-col>
          <v-col cols="12" class="hidden-md-and-up">
            <redes :redes="contacto"/>
          </v-col>
        </v-row>
  </v-app-bar>
</template>
<script>
import Redes from '@/components/Redes';

export default {
  components: {
    Redes
  },
  data() {
    return {
      contacto: [
        {
          icono: 'mdi-send-circle',
          url: 'http://telegram.me/mushix5',
          color: '#37AFE2'
        },
        {
          icono: 'mdi-whatsapp',
          url: 'https://api.whatsapp.com/send?phone=+529821061985',
          color: '#25D366'
        },
        {
          icono: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/jesus-medina-calderon-82909a162/',
          color: '#0077B5'
        },
        {
          icono: 'mdi-facebook',
          url: 'https://www.facebook.com/profile.php?id=100055386702353',
          color: '#3B5998'
        },
      ],
    }
  }
}
</script>
