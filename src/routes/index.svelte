<script>
  // Components
  import IndexPage from '@/components/templates/IndexPage.svelte'

  // Page data
  import { projects } from './projects/_data'

  // Svelte stores
  import { state } from '@/stores/contactPopup.js'

  let state_value

  const unsubscribe = state.subscribe((value) => {
    state_value = value
  })
</script>

<style lang="scss">
</style>

<svelte:head>
  <title>Portfolio | Jordy Fronik</title>
</svelte:head>

<IndexPage {projects} />
<h1>State is {state_value}</h1>
