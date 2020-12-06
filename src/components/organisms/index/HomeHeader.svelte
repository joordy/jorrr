<script>
  import IntroText from '@/components/molecules/home/IntroText.svelte'
  import IntroImage from '@/components/molecules/home/IntroImage.svelte'

  // let image = {
  //   imageSource:
  //     'https://user-images.githubusercontent.com/48051912/96291796-e42e4900-0fe8-11eb-8f12-b52e16f6957c.png',
  //   imageAlt: 'Photo of Jordy',
  // }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    height: 100vh;
    position: relative;
    transition: moveSectionIn 1s;
    @media screen and (min-width: 600px) {
      height: 95vh;
    }
    img {
      position: absolute;
      right: -15vw;
      bottom: 0;
      width: 250px;
      height: auto;
      @media screen and (min-width: 600px) {
        width: 400px;
        right: -10vw;
      }
      @media screen and (min-width: 1195px) {
        width: 525px;
        right: -1.5vw;
      }
    }
  }
</style>

<section id="home">
  <IntroText />
  <IntroImage />
  <!-- <img src={image.imageSource} alt={image.imageAlt} /> -->
</section>
