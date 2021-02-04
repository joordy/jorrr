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
  <h2>Assignment</h2>
  <p>{project.assignmentdesc}</p>
</section>
