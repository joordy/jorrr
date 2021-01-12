<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    width: 190px;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
    background-color: $ui-turquoise;
    color: $ui-dark-blue;
    text-align: center;
    font-weight: $bold;
    text-decoration: none;
    border: none;
    position: absolute;
    z-index: 0;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 50px;
      left: -5px;
      width: calc(100% + 10px);
      height: 100%;
      background-color: $ui-dark-blue;
      border-radius: 50% 50% 0% 0;
      z-index: -1;
      transition: all 0.5s;
      border: none;
    }
    &:hover {
      color: $ui-turquoise;
      &:before {
        top: 0px;
        border-radius: 0;
      }
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
