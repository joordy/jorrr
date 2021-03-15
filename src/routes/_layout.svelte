<script>
  import Header from '@/components/organisms/other/Header.svelte'
  import Footer from '@/components/organisms/other/Footer.svelte'

  export let segment
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<Header {segment} />

<slot />

<Footer />
