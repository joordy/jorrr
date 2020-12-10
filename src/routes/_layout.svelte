<script>
  // import Nav from '../components/Nav.svelte';
  import HeaderElement from '../components/organisms/HeaderElement.svelte'
  import Footer from '../components/organisms/Footer.svelte'

  // export let segment;
</script>

<style>
  @import 'src/styles/index.scss';
  /* main {
		position: relative;
    color: white;
		padding: 2em;
    margin: 0px 200px;
		box-sizing: border-box;
	} */
</style>

<!-- <Nav {segment}/> -->

<HeaderElement />

<slot />

<Footer />
