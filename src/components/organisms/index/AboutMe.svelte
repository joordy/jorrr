<script>
  import { BlockTitle } from '@/components/atoms/index.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    // height: 100vh;
    .about__text {
      display: flex;
      justify-content: space-between;
      p {
        width: 47.5%;
      }
    }
  }
</style>

<section id="about">
  <BlockTitle pageSectionTitle="About" />
  <section class="about__text">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
      elementum tincidunt turpis consectetur viverra purus dolor varius mi. Mi
      phasellus quis consectetur feugiat. Platea ipsum eleifend id tristique
      egestas molestie augue. Elementum nam eu consectetur convallis vestibulum,
      suscipit. Eleifend phasellus nulla quis elementum egestas nunc auctor. At
      nibh mauris viverra in lacus, maecenas ac. Varius lorem mattis eget
      ullamcorper faucibus nunc. Eu tristique vel, nibh pellentesque.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
      elementum tincidunt turpis consectetur viverra purus dolor varius mi. Mi
      phasellus quis consectetur feugiat. Platea ipsum eleifend id tristique
      egestas molestie augue. Elementum nam eu consectetur convallis vestibulum,
      suscipit. Eleifend phasellus nulla quis elementum egestas nunc auctor. At
      nibh mauris viverra in lacus, maecenas ac. Varius lorem mattis eget
      ullamcorper faucibus nunc. Eu tristique vel, nibh pellentesque.
    </p>
  </section>
</section>
