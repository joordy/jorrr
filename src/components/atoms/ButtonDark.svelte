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
    line-height: 20px;
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.12),
      rgba(35, 131, 121, 0.41)
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
    @include lightMode {
      border: 2px solid #1a1824;
      color: #1a1824;
      background: linear-gradient(
        90deg,
        rgba($color: #1a1824, $alpha: 0.02),
        rgba($color: #1a1824, $alpha: 0.21)
      );
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
