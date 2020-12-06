<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1em;
    padding: calc(1em - 4px) 3em;
    border-radius: 30px;
    border: 4px solid $ui-turquoise;
    color: $ui-turquoise;
    font-weight: 700;
    text-decoration: none;
  }
</style>

<a href={linkTO}>{textCTA}</a>
