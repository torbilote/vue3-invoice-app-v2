<template>
  <section class="flex flex-nowrap flex-col items-center md:flex-row md:justify-evenly">
    <TheCounter />
    <TheFilters />
  </section>
  <section class="">
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
