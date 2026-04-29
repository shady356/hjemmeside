<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import abstractPianoArt from '@/assets/abstract_piano_art.svg'
import pokeview from '@/assets/pokeview.svg'

const projects = [
  {
    title: 'Enkelt piano',
    description: 'Spill piano i nettlesern',
    color: '#E2EDD6',
    image: abstractPianoArt,
    url: new URL('https://shady356.github.io/simple-piano/'),
  },
  {
    title: 'PokeView',
    description: 'Utforsk Pokémon-verdenen',
    color: '#D6EFEF',
    image: pokeview,
    url: new URL('https://shady356.github.io/pokedex/'),
  },
]
</script>

<template>
  <section class="projects-section">
    <h2>Mine Prosjekter</h2>
    <div class="cards-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :color="project.color"
        :image="project.image"
        :url="project.url"
      />
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 3rem 4rem;
  box-sizing: border-box;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
</style>
