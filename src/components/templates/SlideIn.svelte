<script>
  import { onMount } from 'svelte'
  import debounce from 'lodash/debounce'

  export let from

  onMount(() => {
    const sliders = document.querySelectorAll('.slideIn')
    console.log(sliders)

    window.addEventListener(
      'scroll',
      debounce((e) => {
        sliders.forEach((slide) => {
          console.log(slide)
          // Half way of image
          const slideInAt =
            window.scrollY + window.innerHeight - slide.offsetHeight / 2
          // Bottom of image
          const slideBottom = slide.offsetTop + slide.offsetHeight

          const isHalfShown = slideInAt > slide.offsetTop

          const isNotScrolledPast = window.scrollY < slideBottom

          if (isHalfShown && isNotScrolledPast) {
            slide.classList.add('active')
          } else {
            slide.classList.remove('active')
          }
        })
      }, 62.5)
    )
  })
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .from-left.slideIn,
  .from-right.slideIn {
    opacity: 0;
    transition: transform 500ms ease-in;
  }
  .from-left.slideIn {
    @include size-s {
      transform: translateX(-50%) translateY(25%) scale(0.9);
    }
  }

  .from-right.slideIn {
    @include size-s {
      transform: translateX(50%) translateY(25%) scale(0.9);
    }
  }

  .slideIn.active {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
  /* 
  * {
    @include size-s {
      background-color: hotpink;
    }
  }

  .from-left {
    @include size-s {
      transform: translateX(-50%);
    }
  }
  .from-right {
    @include size-s {
      transform: translateX(50%);
    }
  }

  .slideIn {
    @include size-s {
      transition: opacity 1000ms ease-in, transform 1000ms ease-in;
      opacity: 0;
    }
  } */
</style>

<div class="{from} slideIn">
  <slot />
</div>
