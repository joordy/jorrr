<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    .image__wrapper {
      width: 95vw;
      margin: 0 auto;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      @include size-s {
        width: 100%;
      }
      // @include size-xl {
      //   width: 70vw;
      // }
      // @include size-ultra {
      //   width: 50vw;
      // }
      article {
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
  }
</style>

<section class="smallSlider">
  <section class="image__wrapper">
    {#each project.smallImageSlider as photo}
      <article><img src={photo.src} alt={photo.alt} /></article>
    {/each}
  </section>
</section>
