<script>
  // Components
  import SocialsIcons from '@/components/atoms/SocialsIcons.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: none;
    @media screen and (min-width: 760px) {
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 0;
    }
    article {
      width: 2rem;
      margin: 0 auto;
      margin-bottom: 2rem;
    }
    div {
      width: 0.175rem;
      height: 225px;
      margin: 0 auto;
      background-color: #8d8e8e;
    }
  }
</style>

<section>
  <article>
    <SocialsIcons />
  </article>
  <div />
</section>
