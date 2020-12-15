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
