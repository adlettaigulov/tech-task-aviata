<template>
  <main>
    <Table />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Table from '@/components/molecules/Table';
export default {
  name: 'Main',
  components: { Table },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['packageList']),
  },
};
</script>

<style></style>
