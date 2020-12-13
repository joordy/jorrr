<script>
  // import Nav from '../components/Nav.svelte';
  import HeaderElement from '../components/organisms/HeaderElement.svelte'
  import Footer from '../components/organisms/Footer.svelte'

  // export let segment;
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<!-- <Nav {segment}/> -->

<HeaderElement />

<slot />

<Footer />
