<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ExitIcon from './icons/ExitIcon.vue'
import BaseButton from './BaseButton.vue'

defineProps<{
  title: string
  description: string
  image: string
  color: string
  githubUrl: string
  websiteUrl?: string
}>()

const emit = defineEmits<{ close: [] }>()

const dialogRef = ref<HTMLDialogElement | null>(null)

onMounted(() => {
  dialogRef.value?.showModal()
})

function close() {
  dialogRef.value?.close()
}
</script>

<template>
  <dialog ref="dialogRef" @close="emit('close')" @click="close">
    <div class="dialog-content" @click.stop>
      <button class="close-button" @click="close" title="Lukk" aria-label="Lukk dialog">
        <ExitIcon />
      </button>
      <div class="dialog-image-wrapper" :style="{ background: color }">
        <img :src="image" :alt="title" class="dialog-image" />
      </div>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="links">
        <BaseButton :href="githubUrl" variant="outline">Se på GitHub</BaseButton>
        <BaseButton v-if="websiteUrl" :href="websiteUrl">Besøk nettside</BaseButton>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
dialog {
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

dialog[open] {
  animation: dialog-enter 0.2s ease-out;
}

.dialog-content {
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: #fff;
  width: 500px;
  max-width: 100vw;
  box-sizing: border-box;
}

@media screen and (max-width: 768px) {
  .dialog-content {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 70vh;
    border-radius: 20px 20px 0 0;
  }
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  cursor: pointer;
  color: #444;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.close-button:hover {
  background: rgba(255, 255, 255, 1);
}

.close-button:focus-visible {
  outline-offset: 2px;
}

h2 {
  font-size: 1.25rem;
  margin: 0 0 0.4rem;
  padding-right: 2rem;
  color: #222;
}

p {
  margin: 0 0 1.75rem;
  color: #333;
  line-height: 1.6;
}

.dialog-image-wrapper {
  margin: -2rem -2rem 1.75rem;
  padding: 1.5rem;
  border-radius: 20px;
}

.dialog-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
  display: block;
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
</style>
