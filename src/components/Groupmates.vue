<template>
  <v-container>
    <!-- Header -->
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="meet-the-team-header">Meet The Team</h1>
      </v-col>
    </v-row>

    <!-- Team Members -->
    <v-row>
      <v-col v-for="member in teamMembers" :key="member.id" cols="12" sm="6" md="3">
        <v-card>
          <v-img :src="require(`@/assets/groupmates/${member.avatar}`)" alt="Member's Avatar"></v-img>
          <v-card-title>{{ member.name }}</v-card-title>
          <v-card-text>{{ member.role }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Angelica Perez',
          role: 'Developer',
          avatar: 'ange.png',
        }, {
          id: 2,
          name: 'John Leynard Chequito',
          role: 'Developer',
          avatar: 'cheq.png',
        }, {
          id: 1,
          name: 'Kasandra Carise Jurquia',
          role: 'Developer',
          avatar: 'kas.png',
        }, {
          id: 1,
          name: 'Jan Dyze Malaluan',
          role: 'Developer',
          avatar: 'dyze.png',
        },
        // Add more team members here
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom CSS styles here if needed */
.meet-the-team-header {
  font-family: 'Special Elite', cursive;
  /* Use the Special Elite font */
  text-align: center;
  font-size: 32px;
  /* Adjust the font size as needed */
  margin-top: 20px;
  /* Add spacing to separate the header from team members */
}
</style>
