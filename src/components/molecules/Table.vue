<template>
  <div>
    <table class="table">
      <tbody>
        <tr>
          <th>Название</th>
          <th>Описание</th>
          <th>Версия</th>
        </tr>
        <tr
          v-for="(item, index) in pageOfItems"
          :key="index"
          @click="showPackageDetails(item.package.name)"
        >
          <td>{{ item.package.name }}</td>
          <td>{{ item.package.description }}</td>
          <td>{{ item.package.version }}</td>
        </tr>
      </tbody>
    </table>
    <jw-pagination
      :items="packageList.objects"
      @changePage="onChangePage"
      :labels="customLabels"
    ></jw-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>',
};

export default {
  name: 'Table',
  data() {
    return {
      pageOfItems: [],
      customLabels,
    };
  },
  computed: {
    ...mapGetters(['packageList']),
  },
  methods: {
    ...mapActions({
      getPackageDetails: 'getPackageDetails',
    }),
    ...mapMutations(['SET_MODAL_STATE', 'SET_PACKAGE']),
    showPackageDetails(packageName) {
      this.packageList.objects.forEach((packageItem) => {
        if (packageName === packageItem.package.name) {
          this.SET_PACKAGE(packageItem.package);
        }
      });
      this.SET_MODAL_STATE(true);
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  background: #f5f5f5;
  border-collapse: collapse;
  border: 1px solid #f5f5f5;
  border-radius: 6px;
  border-style: hidden;
  margin: 30px 0;
  @media (max-width: 375px) {
    overflow-x: scroll;
  }
  tr {
    cursor: pointer;
    &:first-child:hover {
      background: #f5f5f5;
    }
    &:hover {
      background-color: #eee;
    }
  }
  th {
    font-weight: bold;
  }
  th,
  td {
    border: 1px solid #f5f5f5;
    padding: 15px;
    text-align: left;
    @media (max-width: 375px) {
      padding: 5px;
    }
  }
}
.pagination {
  margin-bottom: 20px !important;
}
</style>
