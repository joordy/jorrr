<script>
  export let textSubject
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  article {
    height: 1.75rem;
    width: 10rem;
    border-radius: 2px;
    position: relative;
    @media screen and (min-width: 1100px) {
      height: 2.5em;
      width: 13.875em;
    }
    div {
      width: 100%;
      height: 100%;
      background-color: $ui-soft-white;
      opacity: 0.2;
    }
    p {
      font-family: 'IBM Plex Mono', monospace;
      font-size: $small-font-size;
      position: absolute;
      height: 16px;
      margin: auto;
      text-align: center;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      @media screen and (min-width: 1100px) {
        font-size: 16px;
        height: 20px;
      }
    }
  }
</style>

<article>
  <div />
  <p>{textSubject}</p>
</article>
