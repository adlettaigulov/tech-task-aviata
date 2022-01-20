<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__content">
        <button class="modal__close" @click="closeModal">
          <CloseIcon />
        </button>

        <div class="modal__package-info">
          <h1>{{ packageInfo.name }}</h1>
          <p>{{ packageInfo.description }}</p>
          <p><b>Версия:</b> {{ packageInfo.version }}</p>
          <p>
            <b>Автор:</b>
            {{ packageInfo.author.name }}
            -
            {{ packageInfo.author.email }}
          </p>
          <a :href="packageInfo.links.homepage" target="_blank">Перейти</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CloseIcon from '@/assets/icons/close.svg';
export default {
  name: 'Modal',
  components: {
    CloseIcon,
  },
  computed: {
    ...mapGetters(['packageInfo']),
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: unset;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease;
  &__wrapper {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    top: 50px;
    background: #fff;
    border-radius: 12px;
  }
  &__content {
    overflow-y: auto;
    max-height: calc(100vh - 100px);
    padding: 60px;
    @media (max-width: 600px) {
      padding: 20px;
    }
  }

  &__close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    background: transparent;
    border: none;

    svg {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
