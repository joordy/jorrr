<script>
  // Components
  import MoreCases from '@/components/organisms/projects/MoreCases.svelte'
  import Concept from '@/components/organisms/projects/Concept.svelte'
  import ProjectHeader from '@/components/organisms/projects/ProjectHeader.svelte'
  import Result from '@/components/organisms/projects/Result.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  main {
    background-color: $ui-black;
    min-height: 100vh;
    overflow-x: hidden;
    color: $ui-soft-white;
    @include size-s {
      top: 75px;
    }
    .mainWrapper {
      @include size-s {
        /* width: 50vw !important; */
      }
      @include size-l {
        /* width: 800px !important; */
      }
    }
  }
</style>

<main>
  <section class="mainWrapper">
    <ProjectHeader {project} />
    <Concept {project} />
    <Result {project} />
    <MoreCases {project} />
  </section>
</main>
