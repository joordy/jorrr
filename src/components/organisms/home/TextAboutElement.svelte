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
        grid-gap: 3em;
      }
      div {
        p {
          font-family: 'IBM Plex Mono', monospace;
          width: 100%;
          margin-bottom: $margin1;
          line-height: 1.5;
          a {
            color: $ui-green;
            text-decoration: none;
            font-weight: 700;
          }
        }
      }
    }
  }
</style>

<section id="about">
  <SlideBottom>
    <BlockTitle pageSectionTitle="About" />
  </SlideBottom>
  <article>
    <SlideBottom>
      <div>
        <p>
          My name is Jordy Fronik, 24 years old from Purmerend, the Netherlands,
          and I'm a creative Developer & Designer. I'm interested in everything
          related to digital design. Currently I'm studying Communication &
          Multimedia Design at the University of Applied Sciences in Amsterdam.
        </p>

        <p>
          I like to solve hard design problems, creating smart user interfaces,
          and developing stuff for the internet. Whether that be websites,
          applications, or something else.
        </p>
      </div>
    </SlideBottom>

    <SlideBottom>
      <div>
        <p>
          My goal is to always develop products which has a good User Experience
          & Interaction, and high performance experiences. You can check out my
          <a href="www.github.com/joordy">GitHub</a>
          for more code!
        </p>
      </div>
    </SlideBottom>

    <!-- <p>
      I like to resolve design problems, create smart user interface and
      imagine useful interaction, developing rich web experiences & web
      applications. When not working or futzing around with code, I study
      how to escape from University. Actually for hire.
    </p> -->
    <!-- <SlideBottom>
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
    </SlideBottom> -->
  </article>
</section>
