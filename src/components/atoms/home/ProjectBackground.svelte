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
  }

  @include lightMode {
    article {
      background-color: #e9e9e9;
      img {
        opacity: 0.5;
      }
    }
  }

  @include size-s {
    article {
      img {
        height: 60%;
      }
    }
  }
  /* article {
    background-color: #1d1d1d;
    border-radius: 10px;
    margin: 1rem;
    height: 100%;
    @include lightMode {
      background-color: #e9e9e9;
    }
    img {
      width: auto;
      height: 100%;
      object-fit: cover;
      opacity: 0.4;
      transition: 0.5s;
      @include lightMode {
        opacity: 0.5;
      }
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  } */

  /* position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 90%;
    margin: 5% 0;
    border-radius: 10px;
    background-color: $ui-softBlack; */
</style>

<article><img src={project.mockupImage} alt="" /></article>
