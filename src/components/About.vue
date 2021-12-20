<template>
    <v-dialog
        :fullscreen="isMobile"
        max-width="730px"
        scrollable
        v-model="dialog"
        transition="dialog-bottom-transition"
    >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
        class="mt-4"
            v-bind="attrs"
            v-on="on"
            :elevation="0"
            color="primary"
            small
        >
            Te cuento acerca de mí
        </v-btn>
        </template>
        <v-card :color="isMobile ? '#EEEEEE' : 'white'">
            <v-card-title>
                <v-spacer/><v-btn icon class="hidden-md-and-up" @click="dialog = false"><v-icon color="black">mdi-close-circle-outline</v-icon></v-btn>
            </v-card-title>
            <v-card-text class="text-center">
                <v-avatar class="mb-6" size="150px">
                  <img
                    alt="Avatar"
                    src="@/assets/avataaars.svg"
                  >
                </v-avatar>
                <div class="my-2 infodata">¡Hola!, mi nombre es Jesús Medina Calderón y soy ingeniero en sistemas computacionales.</div>
                <div class="my-6 estracto">El software es un universo emocionante y lleno de retos, la sensación de satisfacción
                    que da el crear un algo, que ayude a las personas o empresas a solucionar sus problemas
                    es más que solo código.</div>
                <div class="my-2 contenido">Como desarrollador de software he trabajado con <b>diferentes empresas</b>, desde el ramo bancario y prendario,
                    hasta proyectos
                    para el ramo hotelero, <b>implementando diferentes tecnologías</b> que se encuentran dentro de mis Skills y
                    tomando nuevas en el camino, he trabajado en modalidad home office y presencial con tecnologías como:
                </div>
                <div class="my-2 tecnologia">Node.js, Lambdas en AWS, JavaScript, Java, Vuejs, TypeScript, Mysql, Serverless, SQLServer y GitHub.</div>
                <!-- <v-btn @click="compartir()">Test</v-btn> -->
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
        }
    },
    computed: {
        isMobile() {
            return this.$vuetify.breakpoint.smAndDown;
        }
    },
}
</script>