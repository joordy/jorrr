<script>
  import Header from '@/components/organisms/Header.svelte'
  import Footer from '@/components/organisms/Footer.svelte'

  export let segment
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<Header {segment} />

<slot />

<Footer />
