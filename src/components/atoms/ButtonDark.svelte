<script>
  export let textCTA
  export let linkTO
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  a {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: $bold;
    color: #079385;
    line-height: 20px;
    border-radius: 8px;
    border: 2px solid #079385;
    padding: 1em 4em;
    text-decoration: none;
    background-color: transparent;
    position: relative;
    display: block;
    overflow: hidden;
    transition: 1s all ease;
    cursor: pointer;
    /* &:hover {
      color: hotpink;
    } */
    /* &:before {
      background: #079385;
      content: '';
      width: 0;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      transition: all 0.6s ease;
    }
    &:hover:before {
      width: 100%;
      color: hotpink;
    } */

    /* background-size: 200%; */

    /* font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    font-weight: $bold;
    color: #079385;
    line-height: 20px;
    border-radius: 8px;
    background-color: transparent;
    background-size: 200%;
    border: 2px solid #079385;
    padding: 1em 4em;
    text-decoration: none;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-position: right;
    } */
  }
</style>

<a href={linkTO}>{textCTA}</a>
