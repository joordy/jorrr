<script>
  import { flip } from 'svelte/animate';

  export let images;

  const lastImage = (e) => {
    images = [images[images.length - 1], ...images.slice(0, images.length - 1)];
    console.log('back');
  };
  const nextImage = (e) => {
    images = [...images.slice(1, images.length), images[0]];

    console.log('next');
  };
</script>

<style lang="scss">
  section {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    button {
      position: absolute;
      margin: auto 0;
      top: 0;
      bottom: 0;
      border-radius: 50%;
      width: 40px;
      height: 40px;

      &:nth-of-type(1) {
        left: 10px;
      }
      &:nth-of-type(2) {
        right: 10px;
      }
    }
  }
</style>

<section id="caroussel_cont">
  <section id="carousel_img">
    {#each images as image}<img src={image.path} alt={image.alt} />{/each}
  </section>
  <button id="backBtn" on:click={lastImage}>Back</button>
  <button id="nextBtn" on:click={nextImage}>Next</button>
</section>
