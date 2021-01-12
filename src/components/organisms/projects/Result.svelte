<script>
  import { LargeCarousel } from '@/components/molecules/projects/allProjectMolecules.js'
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
  .result {
    h2 {
      margin: 75px 0 25px 0;
      font-size: $h2-size;
    }
    p {
      margin: $margin2 0;
    }
  }
</style>

<section class="result">
  <h2>Result</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorum qui
    labore nostrum maiores debitis recusandae facere, ipsa suscipit eius esse
    possimus numquam inventore sunt deserunt quas iste voluptate odit!
  </p>

  <LargeCarousel {images} />
</section>
