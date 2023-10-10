<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="meet-the-team-header">BORAHAE's FOUNDER</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(person, index) in people" :key="index">
        <v-card class="twitter-card">
          <v-img
            :src="require(`@/assets/groupmates/${person.avatar}`)"
            alt="Member's Avatar"
            height="200"
            contain
          ></v-img>
          <v-card-title class="text-center">
            <h5 class="card-title">{{ person.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ person.handle }}</h6>
          </v-card-title>
          <v-card-text>
            <p class="card-text text-md-center">{{ person.description }}</p>
            <p class="developer-description">{{ person.developerDescription }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: 'Angelica Perez',
          handle: '@mdo',
          description: 'Description for Angelica.',
          developerDescription: 'Frontend Developer with expertise in Vue.js and UI design.',
          avatar: 'ange.png',
        },
        {
          name: 'Kasandra Jurquia',
          handle: '@fat',
          description: 'Description for Kasandra.',
          developerDescription: 'Full-stack Developer specializing in Node.js and React.',
          avatar: 'kas.png',
        },
        {
          name: 'Leynard Chequito',
          handle: '@twitter',
          description: 'Description for Leynard.',
          developerDescription: 'Backend Developer experienced in Python and Django.',
          avatar: 'cheq.png',
        },
        {
          name: 'Dyze Malaluan',
          handle: '@twitter',
          description: 'Description for Dyze.',
          developerDescription: 'Mobile App Developer with skills in React Native.',
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

.twitter-card {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.twitter-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0;
}

.card-subtitle {
  color: #555;
}

.card-text {
  color: #333;
}

.developer-description {
  font-style: italic;
  color: #777;
}
</style>
