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
  background-color: #55bb06;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  width: 200px;
}
</style>
