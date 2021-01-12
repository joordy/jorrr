<script>
  import {
    Assignment,
    LiveView,
    MoreCases,
    Process,
    ProjectHeader,
    Result,
  } from '@/components/organisms/projects/allProjectElements.js'

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
      @include size-xl {
        width: 40vw !important;
      }
      @include size-ultra {
        width: 30vw !important;
      }
    }
  }
</style>

<main>
  <section class="mainWrapper">
    <ProjectHeader {project} />
    <Assignment {project} />
    <Process {project} />
    <Result {project} />
    <LiveView {project} />
    <MoreCases {project} />
  </section>
</main>
