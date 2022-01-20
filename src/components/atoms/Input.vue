<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    class="input"
  />
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 40px;
  color: #000;
  border: 1px solid #ff5627;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 15px;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #000;
  }
}
</style>
