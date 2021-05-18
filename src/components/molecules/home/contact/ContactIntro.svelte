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
    span {
      font-weight: 700;
      color: $ui-green;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        transform: scale(1.05);
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
  <span on:click={changeState}>Contact me</span>
</article>
