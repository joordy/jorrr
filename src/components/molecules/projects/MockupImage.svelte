<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .background {
    position: absolute;
    top: 138px;
    right: 0;
    width: 498px;
    border-radius: 280%;
    height: 130%;
    background-color: white;
    filter: blur(150px);
  }
  .overlay {
    position: absolute;
    right: 0;
    bottom: -15em;
    height: 100%;
    width: 400px;
    img {
      width: auto;
      height: 100%;
    }
  }
  // article {
  //   position: absolute;
  //   top: 0;
  //   right: 5em;
  //   width: calc(height);
  //   height: 120%;
  //   background-color: white;
  //   border-radius: 500%;
  //   filter: blur(9px);
  //   div {
  //     width: 55%;
  //     height: 100%;
  //     margin: $margin8 auto 0 auto;
  //     filter: blur(0);
  //     img {
  //       width: 100%;
  //       // height: 100%;
  //       // margin: 0 auto;
  //     }
  //   }
  // }
</style>

<div class="background" />
<div class="overlay"><img src={project.mockupHeaderImage} /></div>
<!-- <article>
  <div>
  </div>
</article> -->
