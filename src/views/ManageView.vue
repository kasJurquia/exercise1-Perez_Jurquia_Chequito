<template>
  <Navbar/>
  <Whoweare/>
</template>



<script>
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Whoweare from '../components/Whoweare.vue';


// Components

export default defineComponent({
  name: 'ManageView',

  components: {
    Whoweare,
    Navbar,
  },
  
});
</script>