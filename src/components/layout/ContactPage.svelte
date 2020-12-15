<script>
  import ContactForm from '@/components/organisms/ContactForm.svelte'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  * {
    color: $ui-soft-white !important;
  }
  main {
    background-color: $ui-dark-blue;
  }
</style>

<main>
  <section class="mainWrapper">
    <ContactForm />
    <!-- <form action=""></form> -->
  </section>
</main>
