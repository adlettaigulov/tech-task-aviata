<template>
  <footer class="footer">
    <ul>
      <li>
        Разработчик:
        <a href="https://t.me/adlettaigulov" target="_blank">Адлет</a>
      </li>
      <li>
        <a href="https://github.com/adlettaigulov" target="_blank">
          <GitHubIcon class="icon" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import GitHubIcon from '@/assets/icons/github.svg';
export default {
  name: 'Footer',
  components: {
    GitHubIcon,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #222;
  color: #fff;
  margin-top: auto;
  padding: 15px 50px 10px 50px;
  border-radius: 6px 6px 0 0;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0;
    li {
      column-gap: 20px;
      a {
        color: #f5f5f5;
      }
    }
  }
  svg {
    color: #fff;
  }
}
</style>
