<script>
  import { BlockTitle } from '@/components/atoms/index.js'
  import MyProject from '@/components/molecules/projects/Project.svelte';
</script>

<style lang="scss">
  @import '../..//styles/variables/context.scss';

  section {
    width: 100%;
    .wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      grid-gap: 1rem;
      @media screen and (min-width: 600px) {
        grid-template-columns: auto auto;
      }
      @media screen and (min-width: 1195px) {
        grid-gap: 2rem;
      }

    }
  }
</style>

<section id="cases">
  <BlockTitle pageSectionTitle="Cases"/>
  <div class="wrapper">
    <MyProject />
    <MyProject />
    <MyProject />
    <MyProject />
  </div>

</section> 