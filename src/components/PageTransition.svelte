<script>
  import { fly } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:fly={{ y: -50, duration: 350, delay: 300 }}
    out:fly={{ y: -50, duration: 350 }}
  >
    <slot />
  </div>
{/key}
