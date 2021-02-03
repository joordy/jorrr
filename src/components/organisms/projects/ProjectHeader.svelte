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
    /* height: 1700px; */
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
      /* width: 60vw;
      min-width: 800px;
      max-width: 1050px; */
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
    /* position: relative; */
  }
  /* section {
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
    @include lightMode {
      background-color: #f6f6f6;
      color: $ui-dark-blue;
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
  } */
</style>

<section class="header">
  <article>
    <IntroText {project} />
    <MockupImage {project} />
  </article>
</section>
