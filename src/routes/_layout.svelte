<script>
  import {
    Header,
    Footer,
  } from '@/components/organisms/other/allOtherElements.js'
  import PageTransition from '@/components/PageTransition.svelte'
  export let segment

  // export let segment;
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<!-- <Nav {segment}/> -->

<Header />

<PageTransition>
  <slot />
</PageTransition>

<Footer />
