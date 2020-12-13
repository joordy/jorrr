<script>
  import IntroText from '@/components/molecules/projects/IntroText.svelte'
  import MockupImage from '@/components/molecules/projects/MockupImage.svelte'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100vw;
    margin-left: -2.5vw;
    background-color: $ui-dark-blue;
    color: $ui-soft-white;
    height: 700px;
    position: relative;
    overflow: hidden;
    @include size-s {
      margin-left: -10vw;
    }
    @include size-xl {
      margin-left: -15vw;
    }
    @include size-ultra {
      margin-left: -25vw;
    }
    article {
      width: 95vw;
      height: 100%;
      margin: 5rem auto 5rem auto;
      display: flex;
      justify-content: space-between;
      @include size-s {
        width: 80vw;
      }
      @include size-xl {
        width: 70vw;
      }
      @include size-ultra {
        width: 50vw;
      }
    }
  }
</style>

<section>
  <article>
    <IntroText {project} />
    <MockupImage {project} />
  </article>
</section>
