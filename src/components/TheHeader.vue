<template>
  <header class="w-screen flex flex-row flex-nowrap h-8">
    <div class="flex-auto flex flex-row flex-nowrap items-center justify-start mt-2 ml-1">
      <img class="max-h-full w-auto transform rotate-20" src="../assets/background_invoice.svg" alt="" />
      <div class="relative ml-1">
        <h1 class="text-sm text-white font-bold">Invoice Manager</h1>
        <svg class="absolute w-1/2 -right-1 top-0" width="232" height="39" viewBox="0 0 232 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 35C159.893 -1.35364 218.289 1.63977 228 7.68067" stroke="#11EF5C" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="flex-auto flex flex-row flex-nowrap items-center justify-end mt-2 mr-1">
      <p class="text-sm text-white font-bold">Sign out</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
