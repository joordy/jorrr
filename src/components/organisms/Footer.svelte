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
    background-color: #222222;
    color: $ui-soft-white;
    display: grid;
    place-items: center;
    section {
      height: 50px;
      display: grid;
      place-items: center;
      p {
        text-align: center;
        font-size: 14px;
        margin-bottom: $margin2;
        padding: 0em 2em;
        span {
          font-size: 20px;
          position: relative;
          top: 2px;
        }
      }
    }
  }
</style>

<footer>
  <section>
    <p><span>&copy;</span> {date} — Jordy Fronik</p>
    <SocialsIcons width={'250px'} />
  </section>
</footer>
