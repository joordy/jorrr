<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    padding: calc(1em - 4px) 2em;
    border-radius: 30px;
    border: 4px solid $ui-turquoise;
    color: $ui-turquoise;
    font-weight: 700;
    text-decoration: none;
    transition: 275ms ease;
    &:hover {
      background-color: $ui-turquoise;
      color: #212738;
    }
    @include size-s {
      padding: calc(1em - 4px) 3em;
      font-size: $basic-font-size;
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
