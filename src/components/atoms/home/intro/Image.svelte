<script>
  // let src = 'PictureOfMe.svg'
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
    /* position: absolute;
    z-index: 1;
    width: 70%;
    max-width: 250px;
    margin: 0 auto;
    &:after {
      content: '';
      filter: blur(1em);
      background: #000;
    }
    @include size-m {
      width: 70%;
      max-width: 450px;
      margin: unset;
    } */
  }
</style>

<img {src} alt="Photo of Jordy" />
