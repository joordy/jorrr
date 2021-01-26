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
    border-radius: 8px;
    background: linear-gradient(
      270deg,
      rgba(14, 64, 59, 0.22),
      rgba(41, 71, 68, 0.01)
    );
    background-size: 140%;
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
