<script>
  import IndexPage from '@/components/layout/IndexPage.svelte'
  import { projects } from './projects/_data'
</script>

<style lang="scss">
</style>

<svelte:head>
  <title>Portfolio — Jorrr.dev</title>
</svelte:head>

<IndexPage {projects} />
