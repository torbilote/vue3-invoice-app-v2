<template>
  <TheCounter />
  <TheFilters />
  <InvoiceList />
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
