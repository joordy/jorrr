<script>
  // Components
  import Process from '@/components/organisms/projects/Process.svelte'
  import LiveView from '@/components/organisms/projects/LiveView.svelte'
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
    background-color: white;
    position: relative;
    overflow-x: hidden;

    .mainWrapper {
      @include size-s {
        width: 50vw !important;
      }
      @include size-l {
        width: 800px !important;
      }
    }
  }
</style>

<main>
  <section class="mainWrapper">
    <ProjectHeader {project} />
    <Concept {project} />
    <Process {project} />
    <Result {project} />
    <LiveView {project} />
    <MoreCases {project} />
  </section>
</main>
