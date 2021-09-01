<template>
  <ul>
    <InvoiceListHeader />
    <InvoiceListRecord />
  </ul>
</template>

<script>
import InvoiceListHeader from './InvoiceListHeader.vue';
import InvoiceListRecord from './InvoiceListRecord.vue';

export default {
  name: 'Invoice List',
  components: {
    InvoiceListHeader,
    InvoiceListRecord,
  },
};
</script>
