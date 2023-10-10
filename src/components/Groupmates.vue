<template>
  <v-container>

    <v-row justify="center">
      <v-col cols="12">
        <h1 class="meet-the-team-header">Meet The Team</h1>
      </v-col>
    </v-row>

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
      ],
    };
  },
};
</script>

<style scoped>
.meet-the-team-header {
  font-family: 'Special Elite', cursive;
  text-align: center;
  font-size: 32px;
  margin-top: 20px;
}
</style>
