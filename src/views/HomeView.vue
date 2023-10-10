<template>
  <Navbar />
 
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Navbar from '../components/Navbar.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar,
  },
});
</script>
