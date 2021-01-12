<script>
  import { fade } from 'svelte/transition'

  export let project

  // const carouselContent = project.largeImageSlider
  const carouselContent = [
    'https://user-images.githubusercontent.com/48051912/100670369-0c86c280-335f-11eb-91de-cc8f52c1e73d.jpg',
    'https://user-images.githubusercontent.com/48051912/100673083-23c7af00-3363-11eb-902a-b2be732a27ae.jpg',
    'https://user-images.githubusercontent.com/48051912/100673084-24604580-3363-11eb-93fa-2efc3581c5a9.jpg',
    'https://user-images.githubusercontent.com/48051912/100673088-25917280-3363-11eb-87ef-6bfeb1c955d3.jpg',
  ]
  let index = 0

  const next = () => {
    index = (index + 1) % carouselContent.length
    console.log('next', index)
  }

  const prev = () => {
    index = (index - 1) % carouselContent.length
    console.log('prev', index)
    if (index === -1) {
      return (index = 3)
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
      height: 100%;
      object-fit: cover;
      position: absolute;
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
      &:focus {
        outline: none;
        border: none;
      }
      &:nth-of-type(1) {
        left: 10px;
        &:before {
          content: '\f060';
        }
      }
      &:nth-of-type(2) {
        right: 10px;
        &:before {
          content: '\f061';
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
