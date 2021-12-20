<template>
  <v-navigation-drawer v-model="drawer" absolute bottom temporary>
    <v-list-item>
      <v-list-item-avatar color="#2C3E50">
        <!-- <v-img src="@/assets/Foto.png"></v-img> -->
        <v-icon color="white">mdi-account-box-outline</v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Contacto</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in contacto"
        :key="item.nombre"
        link
        :href="item.url"
        target="_blank"
      >
        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icono }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.nombre }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        @click="compartir()"
      >
        <v-list-item-icon>
          <v-icon color="blue">mdi-share-variant-outline</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Compartir</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
props: {
    mostrar: {
        type: Boolean,
        require: true,
    }
},
  data() {
    return {
      drawer: false,
      contacto: [
        {
          icono: 'mdi-send-circle',
          url: 'http://telegram.me/mushix5',
          color: '#37AFE2',
          nombre: 'Telegram',
        },
        {
          icono: 'mdi-whatsapp',
          url: 'https://api.whatsapp.com/send?phone=+529821061985',
          color: '#25D366',
          nombre: 'Whatsapp',
        },
        {
          icono: 'mdi-linkedin',
          url: 'https://www.linkedin.com/in/jesus-medina-calderon-82909a162/',
          color: '#0077B5',
          nombre: 'Linkedin',
        },
        {
          icono: 'mdi-facebook',
          url: 'https://www.facebook.com/profile.php?id=100055386702353',
          color: '#3B5998',
          nombre: 'Facebook',
        },
      ],
    };
  },
  methods: {
    compartir() {
      if (navigator.share) {
        navigator.share({ title: 'Jesús Medina Calderón', text: 'Te cuento acerca de mí', url: 'https://www.jmedina.com.mx' });
      }
      return false;
    },
    emitir(){
        this.$emit('input', false);
    },
  },
  watch: {
    mostrar: function (val) {
      this.drawer = val;
    },
    drawer: function (val) {
        if(!val){
            this.emitir();
        }
    },
  }
};
</script>
