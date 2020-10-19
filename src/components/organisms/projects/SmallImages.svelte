<script>
  export let project;
</script>

<style lang="scss">
  .image__wrapper {
    width: 100%;
    margin: 0 auto;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    article {
      display: inline-block;
      margin: 1rem;
      height: 250px;
      min-width: 350px;
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
      <article>
        <img src={photo.src} alt={photo.alt}>
      </article>
    {/each}
  </section>
</section>