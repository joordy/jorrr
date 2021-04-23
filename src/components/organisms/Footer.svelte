<script>
  import SocialsIcons from '@/components/atoms/SocialsIcons.svelte'

  let date = new Date().getFullYear()
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  footer {
    position: fixed;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 200px;
    background-color: #1a1a1b;
    color: $ui-soft-white;
    display: grid;
    place-items: center;
    @include lightMode {
      /* background-color: #e7e5e5; */
      * {
        /* color: $ui-dark-blue; */
      }
    }
    section {
      height: 50px;
      display: grid;
      place-items: center;
      p {
        text-align: center;
        font-size: 12px;
        margin-bottom: $margin2;
        padding: 0em 2em;
      }
    }
  }
</style>

<footer>
  <section>
    <p>&copy; {date} — Designed & Built by Jordy Fronik</p>
    <SocialsIcons />
  </section>
</footer>
