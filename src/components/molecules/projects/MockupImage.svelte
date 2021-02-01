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
        @include lightMode {
          filter: blur(700px);
          background-color: $ui-dark-blue;
        }
      }
      &:nth-of-type(2) {
        width: 100%;
        height: 100%;
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
          height: 60%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
</style>

<article>
  <div />
  <div><img src={project.mockupImage} /></div>
</article>
