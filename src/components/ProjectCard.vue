<script setup lang="ts">
defineProps<{
  title: string
  description: string
  color: string
  image: string
  url: URL
}>()
</script>

<template>
  <a :href="url" target="_blank" class="card" :style="{ '--card-color': color }">
    <div class="card-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="card-footer">
      <div class="card-text">
        <p class="card-title">{{ title }}</p>
        <p class="card-description">{{ description }}</p>
      </div>
      <div class="arrow-button" :aria-label="`Åpne ${title}`">
        <span class="material-symbols-rounded">arrow_forward</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  background-color: var(--card-color);
  border-radius: 16px;
  width: 240px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  text-decoration: none;
}

.card:active {
  transform: scale(1.02);
}

.card-image {
  padding: 1.25rem 1.25rem 0;
}

.card-image img {
  width: 100%;
  height: 160px;
  object-fit: contain;
  display: block;
}

.card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 1.25rem;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-decoration: none;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin: 0;
  text-decoration: none;
}

.card-description {
  font-size: 14px;
  color: #444;
  margin: 0;
}

.arrow-button {
  background-color: hsl(
    from var(--card-color) h clamp(0%, calc(s + 30%), 100%) clamp(10%, calc(l - 38%), 100%)
  );
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
}

.material-symbols-rounded {
  color: #fff;
  font-size: 20px;
}
</style>
