<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    display: block;
    @include size-xs {
      display: flex;
    }
    @include size-s {
      display: block;
    }
    @include size-m {
      display: flex;
    }
    div {
      height: 200px;
      width: calc(100% - 2em);
      padding: 1em;
      @include size-xs {
        width: 50%;
        height: 250px;
      }
      @include size-s {
        height: 200px;
        width: 100%;
      }
      @include size-m {
        width: 50%;
        height: 250px;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }
  }
</style>

<article class="image__wrapper">
  {#each project.smallImageSlider as photo}
    <div><img src={photo.src} alt={photo.alt} /></div>
  {/each}
</article>
