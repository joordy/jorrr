<script>
  import { fade } from 'svelte/transition'

  export let project

  let index = 0

  const next = () => {
    index = (index + 1) % project.largeImageSlider.length
    console.log('next', index)
  }
  const prev = () => {
    index = (index - 1) % project.largeImageSlider.length
    console.log('prev', index)
    if (index === -1) {
      return (index = project.largeImageSlider.length - 1)
    }
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    width: 100%;
    min-height: 225px;
    height: 60vw;
    overflow: hidden;
    position: relative;
    @include size-s {
      min-height: 275px;
      height: 32vw;
    }
    @include size-l {
      height: 500px;
    }
    img {
      width: 100%;
      height: auto;
      margin: 3% 0;
      object-fit: cover;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      border-radius: 4px;
    }
    button {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border: none;
      border-radius: 50%;
      color: $ui-black;
      transition: 0.5s;
      font-family: FontAwesome;
      font-size: 2rem;
      font-weight: 900;
      outline: none;
      &:nth-of-type(1) {
        left: 10px;
      }
      &:nth-of-type(2) {
        right: 10px;
      }
      &:hover {
        color: $ui-green;
        &:nth-of-type(1) {
          transform: translate(-10px);
        }
        &:nth-of-type(2) {
          transform: translate(10px);
        }
      }
    }
  }
</style>

<article>
  {#each [project.largeImageSlider[index]] as src (index)}
    <img transition:fade {src} alt="" />
  {/each}
  <button on:click={prev}>&larr; </button>
  <button on:click={next}>&rarr; </button>
</article>
