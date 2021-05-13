<script>
  // Svelte stores
  import { state } from '@/stores/contactPopup.js'

  let state_value
  const unsubscribe = state.subscribe((value) => {
    state_value = value
  })

  function changeState() {
    if (!state_value) {
      state.update((state) => (state = true))
    } else {
      state.update((state) => (state = false))
    }
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    font-size: $h3-size;
    font-weight: 700;
  }
  p {
    font-family: 'IBM Plex Mono', monospace;
    max-width: 330px;
    margin: $margin2 0;
  }
</style>

<h3>Get In Touch</h3>

<p>
  Are you interested in working with me? Please feel free to contact me for a
  project or a collaboration together.
</p>

<button on:click={changeState}>Contact me</button>
