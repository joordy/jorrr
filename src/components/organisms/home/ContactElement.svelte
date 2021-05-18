<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  // Components
  import BlockTitle from '@/components/atoms/BlockTitle.svelte'
  import ContactIntro from '@/components/molecules/home/contact/ContactIntro.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    @include size-s {
      padding-bottom: 5rem;
    }
    article {
      margin-top: 1rem;
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
    }
  }
</style>

<section id="contact">
  <SlideBottom>
    <BlockTitle pageSectionTitle="Contact" />
  </SlideBottom>

  <SlideBottom>
    <ContactIntro />
  </SlideBottom>
</section>
