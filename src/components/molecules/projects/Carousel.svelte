<script>
  import { flip } from 'svelte/animate'

  export let images
  export let speed = 1000

  const lastImage = (e) => {
    const transitionImage = images[images.length - 1]
    console.log(transitionImage.id)
    document.getElementById(transitionImage.id).style.opacity = 0
    images = [images[images.length - 1], ...images.slice(0, images.length - 1)]
    setTimeout(() => {
      document.getElementById(transitionImage.id).style.opacity = 1
    }, 0)
  }
  const nextImage = (e) => {
    const transitionImage = images[0]
    console.log(transitionImage.id)
    document.getElementById(transitionImage.id).style.opacity = 0
    images = [...images.slice(1, images.length), images[0]]
    setTimeout(() => {
      document.getElementById(transitionImage.id).style.opacity = 1
    }, speed)
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

      &:focus {
        outline: none;
        box-shadow: 0px 0px 2px black;
      }
      &:nth-of-type(1) {
        left: 10px;
        // &:before {
        //   content: '\f060';
        // }
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

<section id="caroussel_cont">
  <!-- <div id="carousel_img"> -->
  {#each images as image (image.id)}
    <img
      id={image.id}
      src={image.path}
      alt={image.alt}
      animate:flip={{ duration: speed }}
    />
  {/each}
  <!-- </div> -->
  <button id="backBtn" on:click={lastImage}>
    <slot name="left-control" id="left-control">
      <svg width="100%" height="100%">
        <g>
          <rect
            fill="white"
            id="canvas_background"
            height="602"
            width="802"
            y="-1"
            x="-1"
          />
        </g>
        <g>
          <title>Layer 1</title>
          <path
            id="svg_1"
            fill="black"
            d="m256,129c0,33.948 -13.486,66.505 -37.49,90.51c-24.005,24.004 -56.562,37.49 -90.51,37.49c-33.9477,0 -66.505,-13.486 -90.5097,-37.49c-24.0046,-24.005 -37.4903,-56.562 -37.4903,-90.51c0,-33.9477 13.4857,-66.505 37.4903,-90.5097c24.0047,-24.0046 56.562,-37.4903 90.5097,-37.4903c33.948,0 66.505,13.4857 90.51,37.4903c24.004,24.0047 37.49,56.562 37.49,90.5097l0,0zm-122.336,42.336c1.502,1.502 2.346,3.54 2.346,5.664c0,2.124 -0.844,4.162 -2.346,5.664c-1.502,1.502 -3.54,2.346 -5.664,2.346c-2.124,0 -4.162,-0.844 -5.664,-2.346l-48,-48c-0.745,-0.743 -1.3361,-1.626 -1.7394,-2.598c-0.4033,-0.972 -0.6109,-2.014 -0.6109,-3.066c0,-1.052 0.2076,-2.094 0.6109,-3.066c0.4033,-0.972 0.9944,-1.855 1.7394,-2.598l48,-48c0.744,-0.7438 1.627,-1.3338 2.599,-1.7364c0.971,-0.4025 2.013,-0.6097 3.065,-0.6097c1.052,0 2.094,0.2072 3.065,0.6097c0.972,0.4026 1.855,0.9926 2.599,1.7364c0.744,0.7438 1.334,1.6268 1.736,2.5987c0.403,0.9718 0.61,2.0134 0.61,3.0653c0,1.0519 -0.207,2.0935 -0.61,3.0653c-0.402,0.9719 -0.992,1.8549 -1.736,2.5987l-34.352,34.336l76.688,0c2.122,0 4.157,0.843 5.657,2.343c1.5,1.5 2.343,3.535 2.343,5.657c0,2.122 -0.843,4.157 -2.343,5.657c-1.5,1.5 -3.535,2.343 -5.657,2.343l-76.688,0l34.352,34.336z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
        </g>
      </svg>
    </slot>
  </button>
  <button id="nextBtn" on:click={nextImage}>
    <slot name="right-control" id="right-control" />
  </button>
</section>
