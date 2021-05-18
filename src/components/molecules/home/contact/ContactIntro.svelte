<script>
  // Svelte stores
  import { state } from '@/stores/contactPopup.js'

  let state_value
  const unsubscribe = state.subscribe((value) => {
    state_value = value
  })

  function changeState() {
    state.update((state) => (state = true))
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    margin-bottom: 2rem;
    h3 {
      font-size: $h3-size;
      font-weight: 700;
    }
    p {
      font-family: 'IBM Plex Mono', monospace;
      max-width: 330px;
      margin: $margin2 0;
    }
    button {
      font-weight: 700;
      font-size: 1rem;
      color: $ui-green;
      cursor: pointer;
      transition: 0.2s;
      border: none;
      outline: none;
      background-color: transparent;
      &:hover {
        transform: scale(1.15);
        /* backdrop-filter: blur(10px); */
        /* box-shadow: 0px 0px 7.5px 20px rgba($color: $ui-green, $alpha: 0.3); */
      }
    }
  }
</style>

<article>
  <h3>Let's work together</h3>
  <p>
    Are you interested in working with me? Please feel free to contact me for a
    project or a collaboration together.
  </p>
  <button on:click={changeState}>Contact me</button>
</article>
