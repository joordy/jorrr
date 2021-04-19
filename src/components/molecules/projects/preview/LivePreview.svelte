<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    color: $ui-white;
    text-decoration: none;
    width: 100%;
    height: 55px;
    line-height: 55px;
    border-radius: 4px;
    border: none;
    background-color: $ui-dark-blue;
    position: relative;
    z-index: 0;
    overflow: hidden;
    @include lightMode {
      /* background-color: $ui-green; */
    }
    &:before {
      content: '';
      position: absolute;
      top: 55px;
      left: 0px;
      width: 100%;
      height: 100%;
      background: #438b4a;
      border-radius: 50% 50% 0% 0;
      z-index: -1;
      transition: all 0.5s;
      color: $ui-dark-blue;
      @include lightMode {
        /* background-color: $ui-dark-blue; */
      }
    }
    &:hover {
      &:before {
        top: 0px;
        border-radius: 0;
      }
    }
  }
</style>

<a href={project.livePreview} target="_blank">See live-version</a>
