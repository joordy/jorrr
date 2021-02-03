<script>
  import { fade } from 'svelte/transition'

  export let project

  let carouselContent = project.largeImageSlider

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
      border-radius: 50%;
      border: none;
      color: white;
      background: transparent;
      transition: 0.5s;
      font-family: FontAwesome;
      font-size: 2rem;
      outline: none;
      &:before {
        width: 100%;
        height: 100%;
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        background-color: rgba($color: #919191, $alpha: 0.5);
        border-radius: 50%;
      }
      &:nth-of-type(1) {
        left: 20px;
        &:before {
          content: '\f060';
        }
        &:hover {
          transform: translate(-10px);
        }
      }
      &:nth-of-type(2) {
        right: 20px;
        &:before {
          content: '\f061';
        }
        &:hover {
          transform: translate(10px);
        }
      }
      &:hover {
        transform: scale(1.2);
        color: #079385;
      }
    }
  }
</style>

<article>
  {#each [project.largeImageSlider[index]] as src (index)}
    <img transition:fade {src} alt="" />
  {/each}
  <button on:click={prev} />
  <button on:click={next} />
</article>
