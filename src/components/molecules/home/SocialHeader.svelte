<script>
  import SocialsIcons from '@/components/atoms/SocialsIcons.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  .wrapper {
    display: none;
    @media screen and (min-width: 600px) {
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .social__icons {
      width: 1.5rem;
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    .social__line {
      width: 0.175rem;
      height: 290px;
      margin: 0 auto;
      background-color: $ui-soft-white;
      @include lightMode {
        background-color: $ui-dark-blue;
      }
    }
  }
</style>

<div class="wrapper">
  <article class="social__icons">
    <SocialsIcons />
  </article>
  <div class="social__line" />
</div>
