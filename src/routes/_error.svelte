<script>
  import ButtonLight from '@/components/atoms/ButtonLight.svelte'

  export let status
  export let error

  const dev = process.env.NODE_ENV === 'development'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  main {
    background-color: $ui-dark-blue;
    color: $ui-soft-white;
    min-height: 300px;
    height: 84vh;
    display: grid;
    place-items: center;
    section {
      text-align: center;
      width: auto;
      max-height: 150px;
      h1 {
        font-size: 3.8em;
        font-weight: 700;
        margin: 0 0 106px 0;
        padding: 0;
      }

      p {
        margin: 1em auto;
      }
    }
  }
</style>

<svelte:head>
  <title>404! Pagina niet gevonden.</title>
</svelte:head>

<main class="error">
  <section>
    <p>Oeps! Er is iets mis gegaan.</p>

    <h1>Pagina niet gevonden.</h1>
    <ButtonLight linkTO="/" textCTA="Terug naar home" />
  </section>
</main>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
