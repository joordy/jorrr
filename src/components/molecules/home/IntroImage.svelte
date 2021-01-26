<script>
  let src = 'PictureOfMe.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    position: absolute;
    top: 25%;
    right: 0;
    width: 60%;
    img {
      width: 100%;
      height: auto;
    }
  }
  // section {
  //   display: block;
  //   // height: 60vw;
  //   // min-height: 230px;
  //   // max-height: 400px;
  //   width: 100%;
  //   // background-color: #c4c4c4;
  //   position: absolute;
  //   bottom: 0;
  //   img {
  //     width: 100%;
  //     height: 100%;
  //     object-fit: cover;
  //     border-radius: 5px;
  //   }
  //   @include size-s {
  //     top: 25%;
  //     right: -9.4vw;
  //     height: 500px;
  //     width: 50%;
  //     border-radius: 5px;
  //     background-color: #c4c4c4;
  //     position: absolute;
  //     top: 25%;
  //     // right: -15vw;
  //   }
  //   @media (min-width: 1180px) {
  //     width: 60%;
  //   }
  //   @media (min-width: 1800px) {
  //     right: 0;
  //   }
  // }
</style>

<section><img {src} /></section>
