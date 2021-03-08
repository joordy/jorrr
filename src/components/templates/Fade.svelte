<script>
  import { onMount } from 'svelte'

  onMount(() => {
    const faders = document.querySelectorAll('.fade-in')
    console.log(faders)
    const appearOptions = {
      threshold: 0,
      rootMargin: '0px 0px -250px 0px',
    }
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        } else {
          entry.target.style.opacity = 1
          entry.target.classList.add('appear')
          appearOnScroll.unobserve(entry.target)
        }
      })
    },
    appearOptions)
    faders.forEach((fader) => {
      appearOnScroll.observe(fader)
    })
  })
</script>

<style lang="scss">
  .fade-in {
    width: unset;
    height: unset;
    opacity: 0;
    transition: opacity 1000ms ease-in;
  }
</style>

<div class="fade-in {test}">
  <slot />
</div>
