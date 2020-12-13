<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .image__wrapper {
    width: 70vw;
    margin: 0 auto;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    article {
      display: inline-block;
      margin-right: $margin1;
      height: 350px;
      width: 350px;
      background-color: hotpink;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>

<section>
  <section class="image__wrapper">
    {#each project.smallImageSlider as photo}
      <article><img src={photo.src} alt={photo.alt} /></article>
    {/each}
  </section>
</section>
