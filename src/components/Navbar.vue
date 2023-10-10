<template>
  
    <v-app-bar app color="indigo-darken-4">
        <v-toolbar-title class="special-elite-font pt-2">BORAHAE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" permanent location="right">

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Manage" value="account" to="/manage"></v-list-item>
        </v-list>
    </v-navigation-drawer>

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
  font-size: 27px;
  padding-left: 20px;
}
</style>