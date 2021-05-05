<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  aside {
    h4 {
      margin-bottom: 0.5rem;
    }
    p,
    a {
      word-wrap: break-word;
    }
    hr {
      margin: 1rem 0;
    }
    a {
      color: $ui-green;
      font-weight: 500;
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
        padding-left: 0.5rem;
      }
    }
  }
</style>

<aside>
  {#each project.assignment as assignment}
    <p>{assignment}</p>
  {/each}
</aside>
