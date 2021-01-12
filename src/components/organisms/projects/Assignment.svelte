<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .assignment {
    // min-height: 700px;
    padding-top: 2em;
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
      height: 400px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
</style>

<section class="assignment">
  <h2>Assignment</h2>

  <p>{project.assignmentTextOne}</p>

  <img src={project.largeImageSlider[0].src} alt="" />

  <p>{project.assignmentTextTwo}</p>
  <!-- <div>
    <ChallengeDesc {project} />
    <ChallengeSpecs {project} />
  </div> -->
</section>
