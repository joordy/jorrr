<script>
  import Header from '@/components/organisms/other/Header.svelte'
  import Footer from '@/components/organisms/other/Footer.svelte'
  // import PageTransition from '@/components/PageTransition.svelte'
  export let segment
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<Header {segment} />

<!-- <PageTransition> -->
<slot />
<!-- </PageTransition> -->

<Footer />
