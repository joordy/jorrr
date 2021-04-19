<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    height: 70vw;
    max-height: 20rem;
    img {
      transform: rotate(10deg) translateX(-10%) translateY(17.5%);
      width: 150%;
    }
    @include size-xs {
      img {
        width: 130%;
      }
    }
    @include size-s {
      height: 30vw;
      max-height: 22rem;
      img {
        width: 170%;
      }
    }
    @include size-m {
      img {
        width: 160%;
      }
    }
  }
</style>

<article><img src={project.thumbImg} alt="" /></article>
