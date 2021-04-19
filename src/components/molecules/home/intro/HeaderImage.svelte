<script>
  let src = 'PictureOfMe.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .img {
    margin: 0 auto 2em auto;
    width: 100%;
    max-width: 395px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2em;
    max-height: 330px;
    img {
      width: 70%;
      max-width: 250px;
      margin: 0 auto;
      &:after {
        content: '';
        filter: blur(1em);
        background: #000;
      }
    }
    @include size-m {
      margin: 0 0 2em auto;
      img {
        width: 70%;
        max-width: 450px;
        margin: unset;
      }
    }
  }
</style>

<aside class="img"><img {src} alt="Photo of Jordy" /></aside>
