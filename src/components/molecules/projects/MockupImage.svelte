<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    display: none;
    height: 100%;
    width: 400px;
    position: relative;
    @include size-s {
      display: block;
    }
    div {
      &:nth-of-type(1) {
        width: 100%;
        height: 100%;
        background-color: white;
        filter: blur(150px);
      }
      &:nth-of-type(2) {
        position: absolute;
        right: 0;
        bottom: -6em;
        z-index: 2;
        height: 90%;
        @include size-m {
          bottom: -8em;
          height: 100%;
        }
        img {
          height: 100%;
        }
      }
    }
  }
  // .mockup {
  //   width: 500px;
  //   height: 100%;
  //   background-color: hotpink;
  //   position: absolute;
  //   z-index: 1;
  //   top: 0;
  //   right: 0;
  //   // position: relative;
  //   // margin: 0 0 0 auto;
  //   filter: blur(150px);
  //   div {
  //     position: absolute;
  //     z-index: 2;
  //     right: 0;
  //     bottom: 0;
  //     width: 100%;
  //     height: 100%;
  //     img {
  //       width: 60px;
  //       height: 200px;
  //     }
  //   }
  // }
  // article {
  //   width: 400px;
  //   height: 100%:
  //   background-color: hotpink;
  //   position: absolute;
  //   right: 0;
  //   bottom: 0;
  //   // width: auto;
  //   // height: auto;
  //   // position: absolute;
  //   // right: 10px;
  //   // bottom: 0;
  //   // z-index: 1;
  //   div {
  //     &:nth-of-type(1) {
  //       // width: 400px;
  //       // height: 130%;
  //       // background-color: white;
  //     }
  //     &:nth-of-type(2) {
  //       img {
  //         display: none;
  //       }
  //       // z-index: 3;
  //       // position: absolute;
  //       // right: 30px;
  //       // bottom: -15em;
  //       // height: 100%;
  //       // width: 400px;
  //       // img {
  //       //   width: auto;
  //       //   height: 100%;
  //       // }
  //     }
  //   }
  //   // .background {
  //   //   position: absolute;
  //   //   top: 138px;
  //   //   right: 0;
  //   //   width: 498px;
  //   //   border-radius: 280%;
  //   //   height: 130%;
  //   //   background-color: white;
  //   //   filter: blur(150px);
  //   // }
  //   // .overlay {
  //   //   position: absolute;
  //   //   right: 30px;
  //   //   bottom: -15em;
  //   //   height: 100%;
  //   //   width: 400px;

  //   // }
  // }
</style>

<article class="mockup">
  <div class="background" />
  <div class="overlay"><img src={project.mockupHeaderImage} /></div>
</article>
