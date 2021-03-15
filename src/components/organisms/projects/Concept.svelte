<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding-top: 2em;
    h2,
    p {
      font-family: 'Inter', sans-serif;
    }
    h2 {
      margin: 75px 0px 25px 0px;
      font-size: $h2-size;
    }
    p {
      margin: 50px 0;
      font-size: $basic-font-size;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  }
</style>

<section>
  <SlideBottom>
    <h2>Concept</h2>
  </SlideBottom>

  <SlideBottom>
    <p>{project.assignment[0]}</p>
  </SlideBottom>

  <SlideBottom><img src={project.introImage} alt="" /></SlideBottom>

  <SlideBottom>
    <p>{project.assignment[1]}</p>
  </SlideBottom>
</section>
