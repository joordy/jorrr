<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    h3 {
      font-size: 1.9rem;
      line-height: 1.9rem;
      font-weight: 700;
    }
    span {
      font-size: 1rem;
      transition: 0.2s;
      font-family: FontAwesome;
      font-weight: 900;
    }
  }
</style>

<article>
  <h3>{project.title}</h3>
  <span>→</span>
</article>
