
<script>
  export let pageSectionTitle;
</script>

<style lang="scss">
  @import '../../styles/variables/context.scss';

 .title__block {
    padding-top: 6.25rem;
    position: relative;
    h1 {
      font-size: $h1-size;
      font-weight: 700;
      @media screen and (min-width:500px) {
        font-size: $title-size;
      }
    }
    div {
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 6px;
      background: linear-gradient(180deg, rgba(33, 39, 56, 0) 44.87%, rgba(33, 39, 56, 1) 74.35%);
    }
  }
</style>

<article class="title__block">
  <h1>{pageSectionTitle}</h1>
  <div></div>
</article>