<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    padding-top: 2em;
    h2,
    p {
      font-family: 'Inter', sans-serif;
    }
    h2 {
      margin: 75px 0px 25px 0px;
      font-size: $h2-size;
    }
    p {
      margin: 50px 0;
      font-size: $basic-font-size;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  }
</style>

<section>
  <h2>Assignment</h2>
  <p>{project.assignmentTextOne}</p>
  <img src={project.introImage} alt="" />
  <p>{project.assignmentTextTwo}</p>
</section>
