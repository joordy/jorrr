<script>
  import Carousel from '@/components/molecules/projects/Carousel.svelte';
  export let project;

  const images = [
    {
      path: 'https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg',
      alt: 'image1',
      id: 1,
    },
    {
      path: 'https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg',
      alt: 'image2',
      id: 2,
    },
    {
      path: 'https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg',
      alt: 'image3',
      id: 3,
    },
    {
      path: 'https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg',
      alt: 'image4',
      id: 4,
    },
  ];
</script>

<style lang="scss">
  section {
    width: 80%;
    margin: 3rem auto 3rem auto;
    height: 600px;
    background-color: hotpink;
  }
</style>

<section>
  <Carousel {images} />
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
