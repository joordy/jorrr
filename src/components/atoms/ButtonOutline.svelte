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
    height: 44px !important;
    line-height: 44px;
    border-radius: 30px;
    background-color: $ui-dark-blue;
    color: $ui-turquoise;
    text-align: center;
    font-weight: $bold;
    text-decoration: none;
    border: 3px solid $ui-turquoise;
    position: relative;
    z-index: 0;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 44px;
      left: -5px;
      width: calc(100% + 10px);
      height: 50px;
      background-color: $ui-turquoise;
      border-radius: 50% 50% 0% 0;
      z-index: -1;
      transition: all 0.5s;
      border: none;
    }
    &:hover {
      color: $ui-dark-blue;
      &:before {
        top: 0px;
        border-radius: 0;
      }
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
