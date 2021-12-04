<template>
<v-container fluid class="fill-height pa-0 ma-0">
  <inicio/>
</v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import Inicio from '@/components/Inicio';

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      Inicio
    },
  }
</script>
