<script>
  export let project;
</script>

<style lang="scss">
  .image__wrapper {
    width: 80%;
    margin: 3rem auto 3rem auto;
    display: flex;
    overflow: hidden;
    
    article {
      height: 600px;
      width: 90%;
      margin: 0 auto;
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
    {#each project.largeImageSlider as photo}
      <article>
        <img src={photo.src} alt={photo.alt}>
      </article>
    {/each} 
  </section>
</section>