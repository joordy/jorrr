<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: block;
    height: 60vw;
    min-height: 230px;
    max-height: 400px;
    width: 100%;
    border-radius: 5px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: 0;
    @include size-s {
      top: 25%;
      right: -10vw;
      height: 500px;
      width: 50%;
    }
    @include size-l {
      width: 60%;
      max-height: 500px;
    }
    @include size-xl {
      right: 0;
    }
  }
</style>

<section />
