<script>
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
  import OnScroll from '@/components/templates/OnScroll.svelte'

  // let bottom = 'fadeinBottom'
  // let top = 'fadeinTop'
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
        .from-left {
          grid-column: 1 / 2;
          transform: translateX(-50%);
        }

        .from-right {
          grid-column: 2 / 3;
          transform: translateX(50%);
        }
        .from-left,
        .from-right {
          transition: transform 400ms ease-in;
        }
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
  <OnScroll>
    <BlockTitle pageSectionTitle="About" />
  </OnScroll>
  <article>
    <OnScroll>
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
    </OnScroll>
    <OnScroll>
      <div>
        <p>
          <span>Tech Stack: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          elementum tincidunt turpis consectetur viverra purus dolor varius mi.
          Mi phasellus quis consectetur feugiat. Platea ipsum eleifend id
          tristique egestas molestie augue. Elementum nam eu consectetur
          convallis vestibulum, suscipit.
        </p>
      </div>
    </OnScroll>
  </article>
</section>
