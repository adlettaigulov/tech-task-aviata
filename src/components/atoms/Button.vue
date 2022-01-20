<template>
  <button class="button" @submit.prevent="" @click="onClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonText: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      this.$emit('event');
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  color: #fff;
  cursor: pointer;
  background-color: #ff5627;
  border: 1px solid #ff5627;
  font-size: 16px;
  text-decoration: none;
  padding: 0 25px;
  height: 40px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  border-radius: 6px;
  &:hover {
    background: #fff;
    color: #ff5627;
  }
}
</style>
