<script>
  import Carousel from '@/components/molecules/projects/Carousel.svelte'
  export let project

  const images = [
    {
      path:
        'https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg',
      alt: 'image1',
      id: 1,
    },
    {
      path:
        'https://user-images.githubusercontent.com/48051912/100673083-23c7af00-3363-11eb-902a-b2be732a27ae.jpg',
      alt: 'image2',
      id: 2,
    },
    {
      path:
        'https://user-images.githubusercontent.com/48051912/100673084-24604580-3363-11eb-93fa-2efc3581c5a9.jpg',
      alt: 'image3',
      id: 3,
    },
    {
      path:
        'https://user-images.githubusercontent.com/48051912/100673088-25917280-3363-11eb-87ef-6bfeb1c955d3.jpg',
      alt: 'image4',
      id: 4,
    },
  ]
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 80%;
    margin: 5rem auto 5rem auto;
    height: 600px;
    // background-color: hotpink;
  }
</style>

<section>
  <Carousel {images}>
    <!--Value-->
  </Carousel>
  <!-- <section class="image__caroussel">
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
  </section> -->
</section>
