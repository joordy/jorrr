<script>
  // Svelte imports
  import { onMount } from 'svelte'
  // Components
  import Header from '@/components/organisms/_global/Header.svelte'
  import Footer from '@/components/organisms/_global/Footer.svelte'

  // Exports
  export let segment

  let colorMode

  onMount(() => {
    function isDarkModeEnabled() {
      return (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    }
    colorMode = isDarkModeEnabled()
  })
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<svelte:head>
  {#if !colorMode}
    <link rel="icon" href="./assets/icons/logo-256x256_dark.png" />
  {:else}
    <link rel="icon" href="./assets/icons/logo-256x256.png" />
  {/if}
</svelte:head>

<Header {segment} />

<slot />

<Footer />
