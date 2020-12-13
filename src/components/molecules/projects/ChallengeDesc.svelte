<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    h2 {
      margin: 0.5em 0;
    }
  }
</style>

<section>
  <h5>Challenge</h5>
  <h2>{project.subTitle}</h2>
  <p>{project.shortExplenation}</p>
</section>
