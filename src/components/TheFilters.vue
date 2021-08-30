<template>
  <div class="max-w-max mx-auto mt-6 flex flex-col items-center gap-y-3">
    <h3 class="text-xs text-white font-normal sm:text-sm lg:text-base xl:text-xl">Filter by:</h3>
    <div class="flex flex-row gap-x-3">
      <select class="bg-blue-500 py-1 rounded shadow-md font-extralight text-xs text-white sm:text-sm lg:text-base xl:text-xl">
        <option class="font-extralight" value="Country" selected>*Country*</option>
        <option class="font-extralight" value="France">France</option>
        <option class="font-extralight" value="Poland">Poland</option>
        <option class="font-extralight" value="Spain">Spain</option>
      </select>
      <select class="bg-blue-500 py-1 rounded shadow-md font-extralight text-xs text-white sm:text-sm lg:text-base xl:text-xl">
        <option class="font-extralight" value="Status" selected>*Status*</option>
        <option class="font-extralight" value="Draft">Draft</option>
        <option class="font-extralight" value="Paid">Paid</option>
        <option class="font-extralight" value="Pending">Pending</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
};
</script>
