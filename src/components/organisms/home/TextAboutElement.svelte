<script>
  // Animations
  import SlideRight from '@/components/animations/SlideRight.svelte'
  import SlideLeft from '@/components/animations/SlideLeft.svelte'

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
  <SlideLeft>
    <BlockTitle pageSectionTitle="About" />
  </SlideLeft>
  <article>
    <SlideLeft>
      <div>
        <p>
          I am a Front-end Developer from Purmerend, in the Netherlands, and am
          currently studying Communication & Multimedia Design at the University
          of Applied Sciences in Amsterdam.
        </p>

        <p>
          I love creating stuff that lives on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide a good User Experience, and high
          performance experiences.
        </p>
      </div>
    </SlideLeft>
    <SlideRight>
      <div>
        <p>
          I’ve spent the past 2+ years working across different areas of digital
          design; Front-end Development, User Experience & User Interaction
          design. Currently I get a lot of satisfaction from developing web
          applications, also check out my work to see what I have built.
        </p>
      </div>
    </SlideRight>
  </article>
</section>
