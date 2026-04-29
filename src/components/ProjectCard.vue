<script setup lang="ts">
defineProps<{
  title: string
  description: string
  color: string
  foreground: string
  image: string
  url: URL
}>()
</script>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="card"
    :aria-label="`${title} – ${description} (åpnes i ny fane)`"
    :style="{ '--card-color': color, '--card-fg': foreground }"
  >
    <div class="card-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="card-footer">
      <p class="card-title">{{ title }}</p>
      <p class="card-description">{{ description }}</p>
      <div class="arrow-button" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M15.839 13.1375H4.93425C4.61509 13.1375 4.34567 13.0278 4.126 12.8083C3.9065 12.5886 3.79675 12.3192 3.79675 12C3.79675 11.6808 3.9065 11.4114 4.126 11.1918C4.34567 10.9723 4.61509 10.8625 4.93425 10.8625H15.839L13.2103 8.23376C12.9864 8.00976 12.8777 7.74451 12.884 7.43801C12.8903 7.13151 12.9991 6.86635 13.2103 6.64251C13.4343 6.41851 13.7027 6.30335 14.0155 6.29701C14.3283 6.29068 14.5968 6.39943 14.8208 6.62326L19.4018 11.1983C19.5136 11.3103 19.5953 11.4346 19.647 11.5713C19.6987 11.7078 19.7245 11.8507 19.7245 12C19.7245 12.1493 19.6987 12.2923 19.647 12.4288C19.5953 12.5654 19.5136 12.6898 19.4018 12.8018L14.8208 17.3768C14.5968 17.6006 14.3283 17.7093 14.0155 17.703C13.7027 17.6967 13.4343 17.5815 13.2103 17.3575C12.9991 17.1337 12.8903 16.8685 12.884 16.562C12.8777 16.2555 12.9864 15.9903 13.2103 15.7663L15.839 13.1375Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  background-color: var(--card-color);
  border-radius: 24px;
  width: 260px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  text-decoration: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.card:active {
  transform: scale(1.02);
}

.card:focus-visible {
  outline: 3px solid #1c3201;
  outline-offset: 3px;
}

.card-image {
  padding: 1rem 1rem 0.25rem;
  flex: 1;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  display: block;
}

.card-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 1.5rem 1.75rem;
  text-align: center;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--card-fg);
  margin: 0;
}

.card-description {
  font-size: 14px;
  color: var(--card-fg);
  margin: 0;
}

.arrow-button {
  background-color: var(--card-fg);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.arrow-button svg {
  color: #fff;
}
</style>
