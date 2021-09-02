<template>
  <button type="button" :class="getColor" class="px-5 py-3 rounded-lg text-white text-sm">{{ buttonTitle }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    buttonColor: {
      type: String,
      required: true,
    },
  },
  computed: {
    getColor() {
      return {
        'bg-red-500': this.$props.buttonColor === 'red',
        'bg-green-500': this.$props.buttonColor === 'green',
        'bg-blue-500': this.$props.buttonColor === 'blue',
      };
    },
  },
};
</script>
