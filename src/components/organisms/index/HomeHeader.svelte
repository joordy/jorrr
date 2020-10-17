<script>
  import TextContent from '@/components/molecules/home/TextContent.svelte';
  let image = {
    imageSource: 'https://user-images.githubusercontent.com/48051912/96291796-e42e4900-0fe8-11eb-8f12-b52e16f6957c.png',
    imageAlt: 'Photo of Jordy'
  }
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    height: 100vh;
    position: relative;
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
  <TextContent />
  <img src={image.imageSource} alt={image.imageAlt}>
</section>
