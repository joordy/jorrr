<script>
  // Components
  import Previous from '@/components/atoms/projects/Previous.svelte'
  import Next from '@/components/atoms/projects/Next.svelte'
  import SlideImg from '@/components/atoms/projects/SlideImg.svelte'

  // Exports
  export let projectImages

  // Navigation buttons
  let leftPosition = 0

  $: handleToRight = (event) => {
    leftPosition = event.detail.left
  }

  $: handleToLeft = (event) => {
    leftPosition = event.detail.left
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    margin: 0 auto;
    position: relative;
    div {
      display: flex;
      width: 100%;
      position: relative;
      transition: left 0.5s;
    }
  }
</style>

<article>
  <div style="left: calc(-{leftPosition}%);">
    {#each projectImages as src}
      <SlideImg {src} />
    {/each}
  </div>

  <Previous {leftPosition} {projectImages} on:greet={handleToLeft} />
  <Next {leftPosition} {projectImages} on:greet={handleToRight} />
</article>
