<template>
  <button class="base-button-icon" v-bind="$attrs">
    <slot />
  </button>
</template>

<style scoped>
.base-button-icon {
  background: var(--btn-icon-bg);
  border: none;
  cursor: pointer;
  color: var(--secondary-text);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.base-button-icon:hover {
  background: var(--btn-icon-bg-hover);
}

.base-button-icon:focus-visible {
  outline-offset: var(--outline-offset);
}
</style>
