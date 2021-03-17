<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    min-width: 75px;
    height: 30px;
    padding: calc(0.5em + 2px) 2em;
    border-radius: 8px;
    background: transparent;
    background-color: $ui-blue;
    background-size: 240%;
    transition: 0.6s;
    font-family: 'IBM Plex Mono', monospace;
    text-align: center;
    line-height: 30px;
    text-decoration: none;
    cursor: pointer;
    color: $ui-black;
    &:hover {
      transform: scale(1.05);
      backdrop-filter: blur(20px);
      box-shadow: 0px 0px 20px 15px rgba($color: $ui-blue, $alpha: 0.3);
    }
    @include size-s {
      padding: calc(0.5em + 2px) 2.5em;
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
