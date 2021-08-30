<template>
  <header class="w-screen flex flex-row flex-nowrap h-8 sm:h-14 lg:h-16 xl:h-24">
    <div class="flex-auto flex flex-row flex-nowrap items-center justify-start mt-2 ml-1 sm:ml-4 lg:ml-5 xl:ml-7">
      <img class="max-h-full w-auto transform rotate-20" src="../assets/background_invoice.svg" alt="" />
      <div class="relative ml-1 sm:ml-4 lg:ml-5 xl:ml-6">
        <h1 class="text-sm text-white font-bold sm:text-lg lg:text-2xl xl:text-5xl">Invoice Manager</h1>
        <svg class="absolute w-1/2 -right-1 top-0 sm:top-2 lg:top-4 xl:top-11" width="232" height="39" viewBox="0 0 232 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 35C159.893 -1.35364 218.289 1.63977 228 7.68067" stroke="#11EF5C" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="flex-auto flex flex-row flex-nowrap items-center justify-end mt-2 mr-1 sm:mr-4 lg:mr-5 xl:mr-7">
      <p class="text-sm text-white font-bold sm:text-lg lg:text-2xl">Sign out</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
