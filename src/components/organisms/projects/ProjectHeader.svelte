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
    overflow: hidden;
    background-color: $ui-dark-blue;
    color: $ui-soft-white;
    @include size-s {
      width: 100vw;
      margin-left: -25vw;
    }
    @include size-l {
      height: 700px;

      width: calc(100vw);
      margin-left: calc((100vw - 800px) / -2);
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
        width: 60vw;
        min-width: 800px;
        max-width: 1050px;
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
