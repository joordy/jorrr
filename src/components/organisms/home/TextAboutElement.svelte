<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  //Components
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
  <SlideBottom>
    <BlockTitle pageSectionTitle="Who am I" />
  </SlideBottom>
  <article>
    <SlideBottom>
      <div>
        <p>
          I am a Front-end Developer from Purmerend, in the Netherlands.
          Currently I'm studying Communication & Multimedia Design at the
          University of Applied Sciences in Amsterdam.
        </p>
        <p>
          I love writing code for the internet, whether that be websites,
          applications, or something else. My goal is to always develop products
          which has a good User Experience & Interaction, and high performance
          experiences.
        </p>
      </div>
    </SlideBottom>
    <SlideBottom>
      <div>
        <p>
          During my education I gained my experience with Front-end Development,
          User Experience & User Interaction. I've mainly focused on Front-end
          Development, you can view my work to see what I have created.
        </p>
      </div>
    </SlideBottom>
  </article>
</section>
