<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  // h2 {
  //   font-size: $h2-size;
  // }
  // p {
  //   margin: $margin2 0;
  // }
  section {
    display: grid;
    place-items: center;
    height: 200px;
    text-align: center;
    a {
      color: black;
      text-decoration: none;
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      // padding: $margin1 $margin-5;
      background-color: #c4c4c4;
    }
  }
</style>

<section><a href={project.livePreview}>Bekijk de live-versie</a></section>
