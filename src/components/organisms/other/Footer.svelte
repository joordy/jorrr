<script>
  import SocialsIcons from '@/components/atoms/SocialsIcons.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  footer {
    position: fixed;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 200px;
    background-color: #292831;
    color: $ui-soft-white;
    display: grid;
    place-items: center;
    section {
      height: 50px;
      display: grid;
      place-items: center;
      p {
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        margin-bottom: $margin2;
      }
    }
  }
</style>

<footer>
  <section>
    <p>Gemaakt met liefde</p>
    <SocialsIcons />
  </section>
</footer>
