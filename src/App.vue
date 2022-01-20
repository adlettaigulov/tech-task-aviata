<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <Header />
        <Main />
        <Footer />
        <Modal v-if="modalIsOpen" @closeModal="closeModal" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Header from '@/components/organisms/Header';
import Main from '@/components/organisms/Main';
import Footer from '@/components/organisms/Footer';
import Modal from '@/components/molecules/Modal';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    Modal,
  },
  data() {
    return {
      modalIsVisible: false,
    };
  },
  computed: {
    ...mapGetters(['modalIsOpen']),
  },
  methods: {
    ...mapMutations(['SET_MODAL_STATE']),
    closeModal() {
      this.SET_MODAL_STATE(false);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  height: 100%;
  width: 100%;
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 15px;
}
</style>
