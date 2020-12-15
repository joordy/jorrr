<script>
  import { SocialsIcons } from '@/components/atoms/allAtoms.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';
  footer {
    position: fixed;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 300px;
    background-color: #292831;
    color: $ui-soft-white;
    display: grid;
    place-items: center;
    section {
      height: 100px;
      display: grid;
      place-items: center;
      p {
        margin-bottom: $margin1;
      }
    }
  }
</style>

<footer>
  <section>
    <p>Built with love</p>
    <SocialsIcons />
  </section>
</footer>
