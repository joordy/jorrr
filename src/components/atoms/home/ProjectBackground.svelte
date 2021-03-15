<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    height: 100%;
    background-color: #1d1d1d;
    border-radius: 10px;
    img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      height: 70%;
      max-width: 100%;
      object-fit: cover;
      opacity: 0.4;
      transition: 0.5s;
    }
    &:hover {
      img {
        transform: translateX(-50%) scale(1.1);
      }
    }
    @include size-s {
      img {
        height: 60%;
      }
    }
    @include lightMode {
      background-color: #e9e9e9;
      img {
        opacity: 0.5;
      }
    }
  }
</style>

<article><img src={project.mockupImage} alt="" /></article>
