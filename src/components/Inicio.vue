<template>
    <v-container fluid class="center">
        <v-row justify="center" align="center" class="fill-height">
            <alert :dialog="mensaje" v-model="mensaje"/>
            <v-col sm="12" md="12" lg="6" class="text-center">
                <v-avatar
                    @click="verAlert()"
                    size="250px"
                    class="hidden-md-and-up">
                  <img
                    alt="Avatar"
                    src="@/assets/Foto.png"
                  >
                </v-avatar>
                <v-avatar
                    @click="verAlert()"
                    size="350px"
                    class="hidden-sm-and-down">
                  <img
                    alt="Avatar"
                    src="@/assets/Foto.png"
                  >
                </v-avatar>
            </v-col>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-col sm="12" md="12" lg="4" class="text-center hidden-sm-and-down">
                <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="genericTitle">¡Hola mundo! Soy</v-list-item-title>
                    <v-list-item-subtitle class="genericSubtitle"><div class="nombre">Jesús Medina Calderón</div></v-list-item-subtitle>
                    <v-list-item-action-text>
                        <v-icon v-for="(item, index) in experiencia" :key="index" :color="item.color" class="mx-1 mt-2" size="25px">
                            {{item.icono}}
                        </v-icon>
                    </v-list-item-action-text>
                    <v-list-item-action-text><about/></v-list-item-action-text>
                </v-list-item-content>
                </v-list-item>
            </v-col>
            <v-col sm="12" md="12" lg="4" class="text-center hidden-md-and-up">
                <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="genericTitleMovil">¡Hola mundo! Soy</v-list-item-title>
                    <v-list-item-subtitle class="genericSubtitleMovil"><div class="nombreMovil">Jesús Medina Calderón</div></v-list-item-subtitle>
                    <v-list-item-action-text>
                        <v-icon v-for="(item, index) in experiencia" :key="index" :color="item.color" class="mx-1">
                            {{item.icono}}
                        </v-icon>
                    </v-list-item-action-text>
                        <v-list-item-action-text><about/></v-list-item-action-text>
                </v-list-item-content>
                </v-list-item>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import About from '@/components/About';
import Alert from '@/components/Alert';

export default {
    components: {
        About,
        Alert,
    },
    data(){
        return {
            experiencia: [
                {
                    icono: 'mdi-vuejs',
                    color: '#42B883',
                },
                {
                    icono: 'mdi-aws',
                    color: '#6A7279',
                },
                {
                    icono: 'mdi-language-javascript',
                    color: '#F0DB4F',
                },
                {
                    icono: 'mdi-nodejs',
                    color: '#3C873A',
                },
                {
                    icono: 'mdi-database-search',
                    color: '#00758F',
                },
                {
                    icono: 'mdi-lambda',
                    color: '#FF9900',
                },
                {
                    icono: 'mdi-github',
                    color: '#211F1F',
                },
                {
                    icono: 'mdi-language-java',
                    color: '#F89820',
                },
                {
                    icono: 'mdi-language-typescript',
                    color: '#007ACC',
                },               
            ],
            mensaje: false,
        }
    },
    methods: {
        verAlert() {
            if(!this.mensaje){
               this.mensaje = true;
            }
        },
    }
}
</script>