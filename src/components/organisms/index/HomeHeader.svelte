<script>
  import TextContent from '@/components/molecules/header/TextContent.svelte';
  let image = {
    imageSource: 'https://user-images.githubusercontent.com/48051912/96291796-e42e4900-0fe8-11eb-8f12-b52e16f6957c.png',
    imageAlt: 'Photo of Jordy'
  }
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    height: 90vh;
    // width: 70vw;
    position: relative;
    img {
      position: absolute;
      right: -5vw;
      bottom: 0;
      max-width: 625px;
    }
  }
</style>

<section id="home">
  <TextContent />
  <img src={image.imageSource} alt={image.imageAlt}>
</section>
