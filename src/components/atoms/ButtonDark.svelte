<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: $bold;
    color: $ui-turquoise;
    line-height: 14px;
    border-radius: 30px;
    background: linear-gradient(
      270deg,
      rgba(26, 24, 36, 1),
      rgba(8, 49, 45, 1)
    );
    background-size: 200%;
    border: 2px solid $ui-turquoise;
    padding: 1em 4em;
    text-decoration: none;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-position: right;
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
