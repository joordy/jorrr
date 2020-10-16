<script>
	// import Nav from '../components/Nav.svelte';
	import Footer from '../components/organisms/Footer.svelte';

	// export let segment;
</script>

<style>
  @import '../styles/layout.scss';
	/* main {
		position: relative;
    color: white;
		padding: 2em;
    margin: 0px 200px;
		box-sizing: border-box;
	} */
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>

<Footer />