<template>
  <div class="search-bar">
    <Input
      id="search"
      v-model="search"
      type="text"
      placeholder="Найти пакеты"
      class="search-bar__input"
    />
    <Button
      button-text="Получить"
      class="search-bar__button"
      @click.native="searchPackages()"
    />
  </div>
</template>

<script>
import Button from '@/components/atoms/Button';
import { mapActions } from 'vuex';
import Input from '@/components/atoms/Input';

export default {
  name: 'SearchBar',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      search: '',
    };
  },
  methods: {
    ...mapActions({
      getPackages: 'getPackages',
    }),
    searchPackages() {
      const query = this.search;
      this.getPackages(query);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  column-gap: 10px;
  &__input {
    width: 100%;
  }
}
</style>
