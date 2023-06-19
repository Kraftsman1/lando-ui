<template>
  <div class="bg-gray-200">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-action {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
