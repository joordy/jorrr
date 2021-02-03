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
      min-height: 200px;
      height: 65vw;
      width: calc(100% - 2em);
      padding: 1em;
      @include size-xs {
        min-height: 250px;
        height: 50vw;
        max-height: 300px;
      }
      @include size-s {
        min-height: 200px;
        height: 30vw;
        max-height: 275px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
    }
  }
</style>

<article class="image__wrapper">
  {#each project.smallImageSlider as photo}
    <div><img src={photo} alt="Summary image of project" /></div>
  {/each}
</article>
