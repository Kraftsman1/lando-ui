<script setup lang="ts">

const mobileMenuOpen = ref(false)

</script>
<template>
  <header class="z-50 top-0 sticky h-22 py-3">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between py-3 px-20 font-semibold">
      <div class="flex">
        <h1 class="font-['Poppins'] font-black text-2xl pr-5">Lando</h1>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Icon name="heroicons:bars-3-center-left-20-solid" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul class="hidden lg:flex justify-between items-center md:pt-0 font-['Inter'] text-base">
          <li v-for="page in pages" :key="page.path" class="inline-block px-4 text-black">
            <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end font-['Inter'] text-base">
        <li class="inline-block py-2 px-4">
          <NuxtLink to="">Log In</NuxtLink>
        </li>
        <li class="inline-block py-2 px-4 text-white bg-blue-500 rounded-lg">
          <NuxtLink to="">Sign Up</NuxtLink>
        </li>
      </div>
    </div>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <h1 class="font-['Poppins'] font-black text-2xl pr-5">Lando</h1>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <Icon name="ic:baseline-close" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <li v-for="page in pages" :key="page.path"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                <NuxtLink :to="page.path">{{ page.name }}</NuxtLink>
              </li>
            </div>
            <div class="py-6">
                      <li class="inline-block py-2 px-4">
            <NuxtLink to="">Log In</NuxtLink>
          </li>
          <li class="inline-block py-2 px-4 text-white bg-blue-500 rounded-lg">
            <NuxtLink to="">Sign Up</NuxtLink>
          </li>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <!--
        <header class="absolute inset-x-0 top-0 z-50">
          <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div class="flex lg:hidden">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <a v-for="page in pages" :key="page.name" :href="page.path" class="text-sm font-semibold leading-6 text-gray-900">{{ page.name }}</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
          <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-50" />
            <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-gray-500/10">
                  <div class="space-y-2 py-6">
                    <a v-for="page in pages" :key="page.name" :href="page.path" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ page.name }}</a>
                  </div>
                  <div class="py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header> -->

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
