<script>
  import ChallengeDesc from '@/components/molecules/projects/ChallengeDesc.svelte'
  import ChallengeSpecs from '@/components/molecules/projects/ChallengeSpecs.svelte'
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .challenge {
    height: 550px;
    display: grid;
    place-items: center;
    @include size-s {
      height: 450px;
    }
    div {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-gap: 2em;
      @include size-s {
        grid-template-columns: auto auto;
        grid-template-rows: auto;
      }
      @include size-m {
        grid-gap: 6em;
      }
    }
    // width: 100vw;
    // margin: 5rem auto 5rem auto;
    // display: grid;
    // grid-template-columns: 1fr;
    // grid-template-rows: 1fr 1fr;
    // grid-gap: 6em;
    // color: $ui-dark-blue;
    // @include size-s {
    //   grid-template-columns: 1fr 1fr;
    //   grid-template-rows: 1fr;
    // }
    // div {
    //   width: 90%;
    //   margin: 0 auto;
    // }
  }
</style>

<section class="challenge">
  <div>
    <ChallengeDesc {project} />
    <ChallengeSpecs {project} />
  </div>
</section>
