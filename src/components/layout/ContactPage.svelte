<script>
  import ContactForm from '@/components/organisms/other/ContactForm.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  * {
    color: $ui-soft-white !important;
    @include lightMode {
      color: #1a1824 !important;
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
    <!-- <form action=""></form> -->
  </section>
</main>
