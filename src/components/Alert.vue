<template>
  <v-dialog
    max-width="500px"
    hide-overlay
    v-model="verDialog"
    content-class="dialogalert"
  >
  <v-card :color="color" outlined class="py-3 pr-3">
      <v-card-text class="ma-0 pa-0 alerta">
          <v-row justify="center" align="center">
              <v-col cols="2" class="text-center mx-1">
                  <v-icon size="30px" color="white">mdi-dog</v-icon>
              </v-col>
              <v-divider dark vertical></v-divider>
              <v-col cols="9">
                  {{text}}
              </v-col>
          </v-row>
      </v-card-text>
  </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      require: true,
    },
    },
    data() {
        return {
            verDialog: false,
            color: '',
            text: '',
            colores: [
                '#7262DE',
                '#ff6961',
                '#77dd77',
                '#cf4890',
                '#84b6f4',
                '#fdcae1',
            ],
            textos: [
                'Hola, soy yo, y estos son algunos datos curiosos, espero los disfruten.',
                'El aguacate es una fruta.',
                'El planeta venus es más caliente que mercurio.',
                'A veces 2 + 2 es igual a 22. (String)',
                'Tu codo jamás ha tocado tu lengua. ',
                'El cielo es azul por causa de nuestra atmosfera.',
                'El cometa Halley se volverá a ver hasta el 28 de julio del 2061. ',
                'El precio de la tortilla en México en 1970 era de solo $1.49MXN por Kilogramo.',
                'La velocidad es igual a distancia sobre tiempo V = D/T.',
                'Un kilogramo de plomo pesa lo mismo que un kilogramo de algodón.',
                'El promedio de vida del mejor amigo del hombre es 10 a 13 años.',
                '¡¡Voltea!!, hay un monstruo detras tuyo.',
                'Los elefantes no pueden saltar.',
                'Los pájaros no pueden comer en el espacio.',
                'Las tortugas marinas nunca conocen a sus madres.',
                'Las medusas no tienen corazón. (Igual que tu ex)',
                'Si estas leyendo esto, no eres un aguacate.',
                'La pizza con piña es un manjar, ¡se tenía que decir y se dijo!',
                '¿No es curiosa la pizza?, es circular, cortada en triángulos y la transportamos en cajas cuadradas.',
                'Tu cerebro hace monstruos imaginarios con tu reflejo cuando pasas más de 10 minutos frente al espejo. (Este último dato quizá sea falso)',
                'La nada es la ausencia de todo, por ende, es algo y entonces no es nada.',
            ],
            interaccion: 0,
            numeroTexto: 0,
            numeroColor: 0,
        }
    },
    watch: {
        dialog(value){
            if(value) {
                this.cargarDialog(value);
            }
            this.verDialog = value;
        },
        verDialog(value){
            if(!value){
                this.cerrar();
            }
        }
    },
    methods: {
        async cargarDialog(value){
            if(this.interaccion === 0){
                this.color = this.colores[0];
                this.text = this.textos[0];
            }else{
                await this.getColor(this.colores);
                await this.getTexto(this.textos);
            }
            this.interaccion++;
        },

        cerrar(){
            this.$emit('input', false)
        },

        async getColor(color){
            const numero = await this.getAleatorio(1, 5);
            if(numero === this.numeroColor){
                this.getColor(color);
                return;
            }
            this.color = color[numero];
        },

        async getTexto(texto) {
            const numero = await this.getAleatorio(0, 20);
            if(numero === this.numeroTexto){
                this.getTexto(texto);
                return;
            }
            this.text = texto[numero];
        },

        async getAleatorio(min, max){
            return Math.floor(Math.random() * (max - min) + min);
        },
    },
};
</script>
<style>

</style>