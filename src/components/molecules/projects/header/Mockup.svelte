<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  aside {
    position: relative;
    div {
      position: absolute;
      background-color: white;
      filter: blur(319px);
      width: 30%;
      height: 28vw;
      max-height: 425px;
      top: 70px;
      left: 50%;
      transform: translateX(-50%);
    }
    img {
      width: auto;
      max-width: 100%;
      height: auto;
      max-height: 550px;
      transition: 0.3s;
      position: relative;
      &:hover {
        transform: scale(1.025);
      }
    }
  }
</style>

<aside>
  <div id="backblur" />
  <img
    width="600"
    height="400"
    src={project.mockupImage}
    alt="Mockup image of {project.title}"
    id="headerImg"
  />
</aside>
