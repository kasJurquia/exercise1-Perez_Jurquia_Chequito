<template>
    <v-app-bar app color="indigo-darken-4">
        <v-toolbar-title class="text-h3 special-elite-font">BORAHAE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>




    <v-navigation-drawer v-model="drawer" permanent location="right">
        <!-- <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="@/assets/groupmates/cheq.png"
            title="Jane Smith"
            subtitle="Logged in"
          ></v-list-item>
        </template> -->

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Manage" value="account" to="/manage"></v-list-item>
        </v-list>
    </v-navigation-drawer>




    <!-- <v-navigation-drawer v-model="drawer" location = "right">
        <v-list>
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
</template>
  
<script>
export default {
    data() {
        return {
            drawer: false,
        };
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer;
        },
    },
};
</script>

<style>
.special-elite-font {
  font-family: 'Special Elite', cursive;
}
</style>