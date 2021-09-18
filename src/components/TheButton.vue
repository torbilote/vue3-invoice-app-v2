<template>
  <button type="button" :class="getButtonColor" class="rounded-lg">{{ buttonTitle }}</button>
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
    getButtonColor() {
      return {
        'bg-red-500': this.$props.buttonColor === 'red',
        'bg-green-500': this.$props.buttonColor === 'green',
        'bg-blue-500': this.$props.buttonColor === 'blue',
      };
    },
  },
};
</script>
