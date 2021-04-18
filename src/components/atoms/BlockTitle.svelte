<script>
  export let pageSectionTitle
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .title__block {
    /* width: 80%; */
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
        bottom: 6px;
        height: 100px;
      }
      @include lightMode {
        background: linear-gradient(
          180deg,
          rgba(246, 246, 246, 0) 44.87%,
          rgba(246, 246, 246, 1) 74.35%
        );
      }
    }
  }
</style>

<article class="title__block">
  <h2>{pageSectionTitle}</h2>
  <div />
</article>
