<template>
  <header class="z-50 top-0 sticky h-22 py-3">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between py-3 px-20 font-semibold">
      <div class="flex">
        <h1 class="font-['Poppins'] font-black text-2xl pr-5">Lando</h1>
        <ul class="md:flex justify-between items-center md:pt-0 font-['Inter'] text-base">
          <li v-for="page in pages" :key="page.path" class="inline-block px-4 text-black">
            <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="font-['Inter'] text-base">
        <li class="inline-block py-2 px-4">
          <NuxtLink to="">Log In</NuxtLink>
        </li>

        <li class="inline-block py-2 px-4 text-white bg-blue-500 rounded-lg">
          <NuxtLink to="">Sign Up</NuxtLink>
        </li>
      </div>
    </div>
  </header>
</template>

<script lang="ts">

import pages from '~/pages'

export default {
  title: 'Header',
  data() {
    return {
      pages: pages
    }
  }
}

</script>
