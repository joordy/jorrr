<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import Mockup from '@/components/molecules/projects/header/Mockup.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    margin-top: 60px;
    width: 100%;
    text-align: center;
    h2 {
      font-size: 2.5rem;
      padding: 7rem 0 3rem;
    }
    h3 {
      font-size: 1rem;
      font-weight: 300;
      width: 80%;
      max-width: 25rem;
      margin: 0 auto 3rem auto;
    }
    @include size-s {
      h2 {
        font-size: 5rem;
      }
      h3 {
        margin-bottom: 5rem;
      }
    }
    @include size-m {
      h2 {
        padding: 10rem 0 3rem;
      }
    }
  }
</style>

<section>
  <article>
    <SlideBottom>
      <h2>{project.title}</h2>
      <h3>{project.subTitle}</h3>
    </SlideBottom>

    <SlideBottom>
      <Mockup {project} />
    </SlideBottom>
  </article>
</section>
