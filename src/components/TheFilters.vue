<template>
  <div class="max-w-max mt-8 flex flex-nowrap flex-col items-center gap-y-4 md:flex-row md:gap-x-4">
    <h3 class="text-sm text-white font-normal sm:text-base md:text-base lg:text-lg xl:text-xl">Filter by:</h3>
    <div class="flex flex-row gap-x-3">
      <select v-model="countryFilter" @change="setFilters({ country: countryFilter, status: statusFilter })" class="bg-blue-filters pr-5 rounded shadow-md font-extralight text-sm text-white sm:text-base md:text-base lg:text-base xl:text-lg">
        <option class="font-extralight" value="Country" selected>*Country*</option>
        <option class="font-extralight" value="France">France</option>
        <option class="font-extralight" value="Poland">Poland</option>
        <option class="font-extralight" value="Spain">Spain</option>
      </select>
      <select v-model="statusFilter" @change="setFilters({ country: countryFilter, status: statusFilter })" class="bg-blue-filters pr-5 rounded shadow-md font-extralight text-sm text-white sm:text-base md:text-base lg:text-base xl:text-lg">
        <option class="font-extralight" value="Status" selected>*Status*</option>
        <option class="font-extralight" value="Paid">Paid</option>
        <option class="font-extralight" value="Pending">Pending</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Filters',
  data() {
    return {
      countryFilter: 'Country',
      statusFilter: 'Status',
    };
  },
  methods: {
    ...mapActions(['setFilters']),
  },
};
</script>
