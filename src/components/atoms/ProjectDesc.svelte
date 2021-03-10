<script>
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    font-size: $h3-size;
    line-height: $h3-size;
    font-weight: 700;
    backdrop-filter: blur(5px);
    display: contents;
  }
  p {
    line-height: 24px;
    margin: 1em 0em 1.5em 0em;
  }
</style>

<h3>{project.title}</h3>
<p>{project.subTitle}</p>
