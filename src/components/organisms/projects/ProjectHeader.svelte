<script>
  import {
    IntroText,
    MockupImage,
  } from '@/components/molecules/projects/allProjectMolecules.js'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    overflow: hidden;
    width: calc(100vw - 7.5px);
    margin-left: -2.5vw;
    background-color: $ui-dark-blue;
    color: $ui-soft-white;
    height: 700px;
    position: relative;
    @include size-s {
      margin-left: -25vw;
    }
    @include size-xl {
      margin-left: -30vw;
    }
    @include size-ultra {
      margin-left: -35vw;
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
        width: 50vw;
      }
      @include size-ultra {
        width: 40vw;
      }
    }
  }
</style>

<section class="header">
  <article>
    <IntroText {project} />
    <MockupImage {project} />
  </article>
</section>
