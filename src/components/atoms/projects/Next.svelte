<script>
  // Svelte imports
  import { createEventDispatcher } from 'svelte'

  // exports
  export let leftPosition
  export let projectImages

  $: dispatch = createEventDispatcher()
  $: moveRight = () => {
    let toFarLeft = leftPosition > projectImages.length * 100 - 200
    if (!toFarLeft) {
      leftPosition = leftPosition + 100
      return leftPosition
    } else {
      return 0
    }
  }

  $: greet = () => {
    dispatch('greet', {
      left: moveRight(),
    })
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    border: 0;
    height: 60px;
    width: 60px;
    background-color: transparent;
    color: transparent;
    transition: 0.2s ease;
    span {
      position: relative;
      width: 60px;
      height: 60px;
      top: 3px;
      color: #000;
      svg {
        width: 35px;
        height: 35px;
        transition: 0.2s ease;
        box-shadow: 0 0px 20px 0 rgba(180, 179, 179, 0.01),
          0 0px 18px 0 rgba(180, 179, 179, 0.01);
        &:hover {
          transform: scale(1.1);
          path {
            fill: $ui-green;
          }
        }
      }
    }
  }
</style>

<!-- <button id="next" on:click={next} on:click={handleClick}> -->
<button on:click={greet}>
  <span>
    <svg
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 128C80.9739 128 97.2525 121.257 109.255 109.255C121.257 97.2525 128 80.9739 128 64C128 47.0261 121.257 30.7475 109.255 18.7452C97.2525 6.74283 80.9739 -4.11116e-06 64 -5.59506e-06C47.0262 -7.07896e-06 30.7475 6.74283 18.7452 18.7452C6.74284 30.7475 7.07896e-06 47.0261 5.59506e-06 64C4.11116e-06 80.9738 6.74284 97.2525 18.7452 109.255C30.7475 121.257 47.0261 128 64 128V128ZM36 68C34.9391 68 33.9217 67.5786 33.1716 66.8284C32.4214 66.0783 32 65.0609 32 64C32 62.9391 32.4214 61.9217 33.1716 61.1716C33.9217 60.4214 34.9391 60 36 60L82.344 60L65.168 42.832C64.7961 42.4601 64.5011 42.0186 64.2998 41.5327C64.0985 41.0467 63.995 40.5259 63.995 40C63.995 39.474 64.0985 38.9532 64.2998 38.4673C64.5011 37.9814 64.7961 37.5399 65.168 37.168C65.5399 36.7961 65.9814 36.5011 66.4673 36.2998C66.9533 36.0985 67.4741 35.9949 68 35.9949C68.526 35.9949 69.0468 36.0985 69.5327 36.2998C70.0186 36.5011 70.4601 36.7961 70.832 37.168L94.832 61.168C95.2045 61.5396 95.5001 61.981 95.7017 62.4669C95.9034 62.9529 96.0072 63.4739 96.0072 64C96.0072 64.5261 95.9034 65.0471 95.7017 65.5331C95.5001 66.019 95.2045 66.4604 94.832 66.832L70.832 90.832C70.0809 91.5831 69.0622 92.005 68 92.005C66.9378 92.005 65.9191 91.5831 65.168 90.832C64.4169 90.0809 63.995 89.0622 63.995 88C63.995 86.9378 64.4169 85.9191 65.168 85.168L82.344 68L36 68Z"
        fill="white"
      />
    </svg>
  </span>
  Next
</button>
