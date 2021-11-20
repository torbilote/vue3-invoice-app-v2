<template>
  <div class="mt-3 flex flex-col">
    <label :for="htmlId" class="text-sm text-white font-extralight mb-1 lg:text-base"> {{ labelText }}</label>
    <select :value="modelValue" @input="emitValue" :id="htmlId" class="py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light lg:text-base bg-blue-attributes">
      <option v-for="option in optionList" :key="option.value" :value="option.value" :selected="option.isOn" :disabled="option.isOff">{{ option.value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Invoice Attribute Select',
  props: {
    modelValue: {
      type: [String, Number, Date],
      required: false,
    },
    htmlId: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    optionList: {
      type: Array,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {},
  methods: {
    emitValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
