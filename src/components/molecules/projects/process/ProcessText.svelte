<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  p {
    font-family: 'Inter', sans-serif;
    margin: $margin2 0;
  }
</style>

{#each project.process as processText}
  <p>{processText}</p>
{/each}
