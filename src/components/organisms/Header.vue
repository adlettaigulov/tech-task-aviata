<template>
  <header class="header">
    <Menu />
    <SearchBar />
  </header>
</template>

<script>
import Menu from '@/components/molecules/Menu';
import SearchBar from '@/components/molecules/SearchBar';
export default {
  name: 'Header',
  components: {
    Menu,
    SearchBar,
  },
};
</script>
