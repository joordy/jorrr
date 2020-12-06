<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 30px;
    background-color: $ui-turquoise;
    color: #212738;
    font-weight: 700;
    text-decoration: none;
  }
</style>

<a href={linkTO}>{textCTA}</a>
