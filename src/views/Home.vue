<template>
  <section class="w-auto flex flex-nowrap flex-col items-center md:w-10/12 lg:w-8/12 md:flex-row md:justify-between lg:mt-5 md:ml-26 lg:ml-32 xl:ml-40">
    <TheCounter />
    <TheFilters />
  </section>
  <section class="mt-10 w-11/12 mx-auto md:mr-0 md:mt-12 md:ml-26 lg:ml-32 xl:ml-40 md:w-10/12 lg:w-8/12">
    <InvoiceList />
  </section>
</template>

<script>
import TheCounter from '../components/TheCounter.vue';
import TheFilters from '../components/TheFilters.vue';
import InvoiceList from '../components/InvoiceList.vue';

export default {
  name: 'Home',
  components: {
    TheCounter,
    TheFilters,
    InvoiceList,
  },
};
</script>
