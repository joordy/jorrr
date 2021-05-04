<script>
  import { createEventDispatcher } from 'svelte'

  export let leftPosition

  $: dispatch = createEventDispatcher()
  $: moveLeft = () => {
    let left = leftPosition < 1
    if (!left) {
      leftPosition = leftPosition - 100
      return leftPosition
    } else {
      return 0
    }
  }

  $: greet = () => {
    dispatch('greet', {
      left: moveLeft(),
    })
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  button {
    position: absolute;
    top: 50%;
    left: 0;
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
        d="M64 0C47.0261 0 30.7475 6.74284 18.7452 18.7452C6.74284 30.7475 0 47.0261 0 64C0 80.9739 6.74284 97.2525 18.7452 109.255C30.7475 121.257 47.0261 128 64 128C80.9739 128 97.2525 121.257 109.255 109.255C121.257 97.2525 128 80.9739 128 64C128 47.0261 121.257 30.7475 109.255 18.7452C97.2525 6.74284 80.9739 0 64 0V0ZM92 60C93.0609 60 94.0783 60.4214 94.8284 61.1716C95.5786 61.9217 96 62.9391 96 64C96 65.0609 95.5786 66.0783 94.8284 66.8284C94.0783 67.5786 93.0609 68 92 68H45.656L62.832 85.168C63.2039 85.5399 63.4989 85.9814 63.7002 86.4673C63.9015 86.9532 64.0051 87.474 64.0051 88C64.0051 88.526 63.9015 89.0468 63.7002 89.5327C63.4989 90.0186 63.2039 90.4601 62.832 90.832C62.4601 91.2039 62.0186 91.4989 61.5327 91.7002C61.0468 91.9015 60.526 92.0051 60 92.0051C59.474 92.0051 58.9532 91.9015 58.4673 91.7002C57.9814 91.4989 57.5399 91.2039 57.168 90.832L33.168 66.832C32.7955 66.4604 32.4999 66.019 32.2983 65.5331C32.0966 65.0471 31.9928 64.5261 31.9928 64C31.9928 63.4739 32.0966 62.9529 32.2983 62.4669C32.4999 61.981 32.7955 61.5396 33.168 61.168L57.168 37.168C57.9191 36.4169 58.9378 35.9949 60 35.9949C61.0622 35.9949 62.0809 36.4169 62.832 37.168C63.5831 37.9191 64.0051 38.9378 64.0051 40C64.0051 41.0622 63.5831 42.0809 62.832 42.832L45.656 60H92Z"
        fill="white"
      />
    </svg>
  </span>
  Prev
</button>
