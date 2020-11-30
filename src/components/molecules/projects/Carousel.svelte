<script>
  export let images;
  console.log(images);
</script>

<style lang="scss">
  section {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    // border: 5px solid hotpink;
    display: flex;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    button {
      position: absolute;
      &:nth-of-type(1) {
        left: 0;
      }
      &:nth-of-type(2) {
        right: 0;
      }
    }
  }
</style>

<section id="caroussel_cont">
  {#each images as image}<img src={image.path} alt={image.alt} />{/each}
  <button id="backBtn">Back</button>
  <button id="nextBtn">Next</button>
</section>
