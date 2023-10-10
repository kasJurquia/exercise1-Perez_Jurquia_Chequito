<template>
  <Navbar />
  <Groupmates />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Navbar from '../components/Navbar.vue';
import Groupmates from '../components/Groupmates.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar,
    Groupmates,
  },
});
</script>
