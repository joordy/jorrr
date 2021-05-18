<script>
  // exports
  export let src
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  img {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    max-height: 200px;
    @include size-m {
      max-height: 250px;
    }
  }
</style>

<img {src} alt="Photo of Jordy" />
