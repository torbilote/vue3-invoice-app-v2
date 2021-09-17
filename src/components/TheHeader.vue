<template>
  <header class="w-screen flex flex-row flex-nowrap h-10 sm:h-16 md:h-16 lg:h-20 xl:h-24">
    <div class="flex-auto flex flex-row flex-nowrap items-center justify-start mt-2 ml-3 sm:ml-5 md:ml-5 lg:ml-6 xl:ml-7">
      <img class="max-h-full w-auto transform rotate-20 cursor-pointer" src="../assets/background_invoice.svg" alt="" />
      <div class="relative ml-2 sm:ml-4 md:ml-4 lg:ml-5 xl:ml-6 cursor-pointer">
        <h1 class="relative z-10 text-base text-white font-bold sm:text-xl md:text-xl lg:text-3xl xl:text-5xl">Invoice Manager</h1>
        <svg class="absolute z-20 w-1/2 -right-1 top-1 sm:top-3 md:top-3 lg:top-6 xl:top-10" width="232" height="39" viewBox="0 0 232 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 35C159.893 -1.35364 218.289 1.63977 228 7.68067" stroke="#11EF5C" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="flex-auto flex flex-row flex-nowrap items-center justify-end mt-2 mr-3 sm:mr-5 md:mr-5 lg:mr-6 xl:mr-7">
      <p class="text-base text-white font-bold sm:text-xl md:text-xl lg:text-xl xl:text-xl cursor-pointer">Sign out</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
