<script>
  export let project;
  console.log(project.largeImageSlider[0].src);
</script>

<style lang="scss">
  .image__caroussel {
    width: 80%;
    margin: 3rem auto 3rem auto;
    overflow-x: scroll;
    border: 5px solid hotpink;
    article {
      display: flex;
      width: 100%;
      height: 600px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>

<section>
  <section class="image__caroussel">
    <article class="caroussel__slide">
      <img
        src="https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg"
        alt="" />
      <img
        src="https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg"
        alt="" />
      <img
        src="https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg"
        alt="" />
      <img
        src="https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg"
        alt="" />
      <img
        src="htts://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg"
        alt="" />
    </article>

    <button id="backButton">back</button>
    <button id="nextButton">next</button>
  </section>
</section>
