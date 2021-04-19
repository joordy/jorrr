<script>
  // Exports
  export let project
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  h3 {
    font-family: 'Inter', sans-serif;
    position: absolute;
    margin: auto 0;
    height: 30px;
    top: 0;
    bottom: 0;
    font-size: $h3-size;
    transition: 0.2s;
  }
  p {
    transition: 0.2s;
    margin: auto 0;
    &:nth-of-type(1) {
      position: absolute;
      top: 0;
      bottom: 50px;
      height: 30px;
    }
    &:nth-of-type(2) {
      position: absolute;
      bottom: 2em;
      display: flex;
      width: inherit;
      color: #191a1e;
      opacity: 0.6;
      span {
        transition: 0.2s;
        &:nth-of-type(2) {
          font-family: FontAwesome;
          font-weight: 900;
          margin-left: 1em;
        }
      }
    }
  }

  @include size-l {
    h3 {
      margin-left: 1em;
    }
    p {
      margin-left: 2em;
      span {
        color: $ui-blue;
      }
    }
  }
</style>

<p>Case study</p>
<h3>{project.otherCase.name}</h3>
<p><span>See case</span><span>&rarr; </span></p>
