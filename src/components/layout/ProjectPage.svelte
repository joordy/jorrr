<script>
  import {
    ChallengeElement,
    LargeImageElement,
    MoreCasesElement,
    HeaderProjectElement,
    ResultElement,
    SmallImageElement,
  } from '@/components/organisms/projects/allProjectElements.js'

  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  main {
    background-color: white;
    position: relative;
    .mainWrapper {
      @include size-s {
        width: 60vw !important;
      }
      @include size-xl {
        width: 50vw !important;
      }
      @include size-ultra {
        width: 40vw !important;
      }
    }
  }
</style>

<main>
  <section class="mainWrapper">
    <HeaderProjectElement {project} />
    <ChallengeElement {project} />
    <SmallImageElement {project} />
    <ResultElement {project} />
    <LargeImageElement {project} />
    <MoreCasesElement {project} />
  </section>
</main>
