<template>
    <v-menu class="hidden-md-and-up" bottom transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs"
              v-on="on">
          <v-icon :size="32">mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-toolbar fullscreen app>
          <v-row justify="space-between" align="center"  class="mr-3">
          <v-col v-for="(item, index) in redes" :key="index" cols="2" class="text-center">
            <v-btn icon :color="item.color" :href="item.url" target="_blank">
            <v-icon size="32px">{{item.icono}}</v-icon>
          </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
    </v-menu>
</template>
<script>
export default {
    props: {
        redes: {
            type: Array,
            require: true,
        }
    }
}
</script>