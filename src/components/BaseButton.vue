<script setup lang="ts">
import { type Component } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

withDefaults(
  defineProps<{
    href?: string
    to?: RouteLocationRaw
    variant?: 'primary' | 'outline'
    icon?: Component
  }>(),
  {
    variant: 'primary',
  },
)
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="base-button"
    :class="variant"
  >
    <slot />
    <component :is="icon" v-if="icon" class="base-button__icon" />
  </a>
  <RouterLink v-else-if="to" :to="to" class="base-button" :class="variant">
    <slot />
    <component :is="icon" v-if="icon" class="base-button__icon" />
  </RouterLink>
  <button v-else class="base-button" :class="variant">
    <slot />
    <component :is="icon" v-if="icon" class="base-button__icon" />
  </button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border: none;
  border-radius: 40px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
}
.base-button.primary:hover {
  background-color: var(--btn-primary-bg-hover);
}
.base-button.primary:active {
  background-color: var(--btn-primary-bg);
}
.base-button.outline {
  background-color: var(--btn-outline-bg);
  color: var(--secondary-text);
  border: 1.5px solid var(--btn-outline-border);
}
.base-button.outline:hover {
  background-color: var(--btn-outline-bg-hover);
}
.base-button.outline:active {
  background-color: var(--btn-outline-bg);
}
.base-button:focus-visible {
  outline: 2px solid var(--outline-color);
  outline-offset: var(--outline-offset);
}
.base-button__icon {
  width: 1.25em;
  height: 1.25em;
  flex-shrink: 0;
}
</style>
