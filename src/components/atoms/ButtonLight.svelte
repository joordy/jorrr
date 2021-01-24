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
    color: $ui-dark-blue;
    line-height: 14px;
    border-radius: 8px;
    background: linear-gradient(
      270deg,
      rgba(9, 108, 99, 1),
      rgba(3, 218, 197, 1)
    );
    background-size: 200%;
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
