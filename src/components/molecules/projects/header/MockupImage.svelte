<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  /* article {
    height: 300px;
    width: 90%;
    margin: 2em auto 0 auto;
    position: relative;
    @include size-xs {
      height: 400px;
    }
    @include size-s {
      margin-top: 2em;
      width: 70%;
      max-width: 675px;
    }
    @include size-m {
      margin-top: 0;
      width: 50%;
    }
    div {
      // blur
      &:nth-of-type(1) {
        width: 100%;
        height: 100%;
        background-color: white;
        filter: blur(150px);
        margin-top: 12em;
        @include lightMode {
          filter: blur(90px);
          background-color: #757575;
        }
      }
      // image
      &:nth-of-type(2) {
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0em;
        z-index: 2;
        @include size-m {
          bottom: -8em;
          height: 100%;
        }
        img {
          height: auto;
          width: 100%;
          object-fit: cover;
          @include size-m {
            transform: scale(1.2);
          }
        }
      }
    }
  } */

  article {
    width: 100%;
    position: relative;
    height: 300px;
    /* overflow: hidden; */
    img {
      position: absolute;
      bottom: 0;
      width: 100%;
      transform: rotate(20deg);
    }
  }
</style>

<article><img src={project.thumbImg} /></article>
<!-- <article>
  <div />
  <div><img src={project.thumbImg} /></div>
</article> -->

<!-- <div><img src={project.mockupImage} /></div> -->
