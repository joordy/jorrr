<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .image__wrapper {
    width: 95vw;
    margin: 0 auto 50px auto;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    @include size-s {
      width: 100%;
    }
    div {
      display: inline-block;
      margin-right: $margin1;
      height: 250px;
      width: 250px;
      background-color: hotpink;
      @include size-s {
        height: 320px;
        width: 320px;
      }
      img {
        width: 100%;
        height: 100%;
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
