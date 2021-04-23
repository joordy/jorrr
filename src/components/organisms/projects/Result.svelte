<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import CaseImageSlider from '@/components/molecules/projects/result/CaseImageSlider.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  section {
    h2 {
      font-family: 'Inter', sans-serif;
      margin: 75px 0 25px 0;
      font-size: $h2-size;
    }
    /* article {
      display: flex;
      flex-direction: row;
      overflow: scroll;
      white-space: nowrap;
      height: 500px;
      position: absolute;
      left: calc(calc(100vw - 920px) / -2);
      width: 100vw;
      overflow-x: scroll;
      padding: 0;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      img {
        width: auto;
        height: 450px;
        &:first-of-type {
          padding-left: calc(calc(100vw - 920px) / -2);
        }
      }
    } */
  }
</style>

<section>
  <SlideBottom>
    <h2>Result</h2>
  </SlideBottom>

  <!-- <LargeCarousel {project} /> -->
  <SlideBottom>
    <!-- test -->
    <article>
      <!-- {#each project.largeImageSlider as sliderImg}
        <img src={sliderImg} alt="" />
      {/each} -->
      <CaseImageSlider images={project.largeImageSlider} />
    </article>
  </SlideBottom>
</section>
