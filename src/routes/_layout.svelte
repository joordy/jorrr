<script>
  import Header from '@/components/organisms/_global/Header.svelte'
  import Footer from '@/components/organisms/_global/Footer.svelte'

  export let segment
</script>

<style>
  @import 'src/styles/index.scss';
</style>

<Header {segment} />

<slot />

<Footer />
