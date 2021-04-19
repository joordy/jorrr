<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import IntroText from '@/components/molecules/projects/header/IntroText.svelte'
  import MockupImage from '@/components/molecules/projects/header/MockupImage.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: calc(100% + 40px);
    margin-left: -20px;
    overflow: hidden;
    background-color: $ui-black;
    color: $ui-soft-white;
    @include size-xs {
      width: calc(100% + 10vw);
      margin-left: -5vw;
    }
    @include size-s {
      width: 100vw;
      margin-left: -25vw;
    }
    @include size-l {
      height: 700px;
      width: calc(100vw);
      margin-left: calc((100vw - 800px) / -2);
    }
    @include lightMode {
      background-color: #e7e5e5;
      color: $ui-dark-blue;
    }
    article {
      height: 100%;
      margin: 5em auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @include size-m {
        width: 90%;
        flex-wrap: nowrap;
      }
      @include size-l {
        width: 80vw;
        min-width: 800px;
        max-width: 1050px;
      }
    }
  }
</style>

<section>
  <SlideBottom>
    <article>
      <IntroText {project} />
      <MockupImage {project} />
    </article>
  </SlideBottom>
</section>
