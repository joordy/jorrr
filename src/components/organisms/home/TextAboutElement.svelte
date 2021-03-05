<script>
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    width: 100%;
    article {
      display: block;
      @include size-s {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
      }
      @include size-l {
        grid-gap: 6em;
      }
      div {
        p {
          font-family: 'IBM Plex Mono', monospace;
          width: 100%;
          margin-bottom: $margin1;
          line-height: 1.5;
        }
      }
    }
  }
</style>

<section id="about">
  <BlockTitle pageSectionTitle="About" />
  <article>
    <div>
      <p>
        I am a Front-end Developer from Purmerend, in the Netherlands, and am
        currently studying Communication & Multimedia Design at the University
        of Applied Sciences in Amsterdam.
      </p>

      <p>
        I love to realize beautiful designs, with the thoughts of User
        Experience, User Interaction and performance in mind.
      </p>
    </div>
    <div>
      <p>
        <span>Tech Stack: </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
        elementum tincidunt turpis consectetur viverra purus dolor varius mi. Mi
        phasellus quis consectetur feugiat. Platea ipsum eleifend id tristique
        egestas molestie augue. Elementum nam eu consectetur convallis
        vestibulum, suscipit. Eleifend phasellus nulla quis elementum egestas
        nunc auctor. At nibh mauris viverra in lacus, maecenas ac. Varius lorem
        mattis eget ullamcorper faucibus nunc. Eu tristique vel, nibh
        pellentesque.
      </p>
    </div>
  </article>
</section>
