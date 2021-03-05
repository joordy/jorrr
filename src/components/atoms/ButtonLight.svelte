<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    min-width: 75px;
    height: 30px;
    padding: calc(0.5em + 2px) 2.5em;

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
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 15px 20px rgba($color: $ui-blue, $alpha: 0.3);
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
