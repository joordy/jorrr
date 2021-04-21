<script>
  export let pageSectionTitle
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .title__block {
    padding-top: 6.25rem;
    position: relative;
    h2 {
      font-family: 'Inter', sans-serif;
      font-size: $h1-size;
      font-weight: 700;
      @media screen and (min-width: 500px) {
        font-size: $title-size;
      }
    }
    div {
      height: 40px;
      width: 100%;
      position: absolute;
      bottom: 2px;
      background: linear-gradient(
        180deg,
        rgba(26, 24, 36, 0) 44.87%,
        $ui-black 74.35%
      );
      @include size-s {
        height: 100px;
      }
    }
  }
</style>

<article class="title__block">
  <h2>{pageSectionTitle}</h2>
  <div />
</article>
