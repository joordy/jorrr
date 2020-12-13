<script>
  export let pageSectionTitle
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .title__block {
    width: 80%;

    padding-top: 6.25rem;
    position: relative;
    h1 {
      font-size: $h1-size;
      font-weight: 700;
      @media screen and (min-width: 500px) {
        font-size: $title-size;
      }
    }
    div {
      height: 100px;
      position: absolute;
      bottom: 6px;
      background: linear-gradient(
        180deg,
        rgba(26, 24, 36, 0) 44.87%,
        rgba(26, 24, 36, 1) 74.35%
      );
    }
  }
</style>

<article class="title__block">
  <h1>{pageSectionTitle}</h1>
  <div />
</article>
