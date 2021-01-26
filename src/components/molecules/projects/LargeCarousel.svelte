<script>
  import { fade } from 'svelte/transition'

  export let project

  const carouselContent = project.largeImageSlider
  let index = 0

  const next = () => {
    index = (index + 1) % carouselContent.length
    console.log('next', index)
  }
  const prev = () => {
    index = (index - 1) % carouselContent.length
    console.log('prev', index)
    if (index === -1) {
      return (index = 5)
    }
  }
</script>

<style lang="scss">
  img,
  button {
    position: absolute;
  }
  article {
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 94%;
      margin: 3% 0;
      object-fit: cover;
      position: absolute;
      border-radius: 4px;
    }
    button {
      position: absolute;
      margin: auto 0;
      top: 0;
      bottom: 0;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 2rem;
      background: transparent;
      border: none;
      color: white;
      font-family: FontAwesome;
      outline: none;
      transition: 0.4s;
      &:focus {
        outline: none;
        border: none;
      }
      &:hover {
        transform: scale(1.2);
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
    }
  }
</style>

<article>
  {#each [carouselContent[index]] as src (index)}
    <img transition:fade {src} alt="" />
  {/each}
  <button on:click={prev} />
  <button on:click={next} />
</article>
