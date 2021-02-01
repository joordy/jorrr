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
    line-height: 20px;
    vertical-align: middle;
    border-radius: 8px;
    background: transparent;
    background-color: #079385;
    color: #f6f6f6;
    background-size: 240%;
    padding: 1em 4em;
    text-decoration: none;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
      background-position: right;
    }
  }
</style>

<a href={linkTO}>{textCTA}</a>
