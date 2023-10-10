<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1 class="meet-the-team-header">BORAHAE's FOUNDER</h1>
      </div>
    </div>
    <div class="row">
      <div v-for="(person, index) in people" :key="index" class="col-12 col-sm-6 col-md-3">
        <div class="card twitter-card">
          <img
            :src="require(`@/assets/groupmates/${person.avatar}`)"
            alt="Member's Avatar"
            height="200"
            class="card-img-top"
          >
          <div class="card-body text-center">
            <h5 class="card-title">{{ person.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ person.handle }}</h6>
            <p class="card-text">{{ person.description }}</p>
            <p class="developer-description">{{ person.developerDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
