<script>
  import ContactForm from '@/components/organisms/other/ContactForm.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  * {
    color: $ui-soft-white !important;
    @include lightMode {
      color: $ui-black !important;
    }
  }
  main {
    background-color: $ui-dark-blue;
    @include lightMode {
      background-color: #f6f6f6;
    }
  }
</style>

<main>
  <section class="mainWrapper">
    <ContactForm />
  </section>
</main>
