<template>
  <div class="max-w-max mt-8">
    <h3 class="text-sm text-white font-normal sm:text-base md:text-base lg:text-lg xl:text-xl">
      There are <span class="text-green-general"> {{ getInvoiceDatabaseSelected.length }} </span> invoices in your inventory.
    </h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Counter',
  computed: {
    ...mapGetters(['getInvoiceDatabaseSelected']),
  },
};
</script>
