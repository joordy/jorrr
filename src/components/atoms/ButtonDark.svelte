<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    min-width: 75px;
    height: 30px;
    padding: 0.5em 2em;
    border-radius: 8px;
    border: 2px solid $ui-blue;
    background-color: transparent;
    font-family: 'IBM Plex Mono', monospace;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
    cursor: pointer;
    color: $ui-blue;
    transition: 0.4s;
    margin-left: 1em;
    &:hover {
      transform: scale(1.05);
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 15px 20px rgba($color: $ui-blue, $alpha: 0.3);
    }
    @include size-m {
      margin: 0;
      padding: 0.5em 2.5em;
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
