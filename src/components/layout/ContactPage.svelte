<script>
  import { ContactForm } from '@/components/organisms/other/allOtherElements.js'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  * {
    color: $ui-soft-white !important;
  }
  main {
    background-color: $ui-dark-blue;
    section {
      margin-top: -4em;
    }
  }
</style>

<main>
  <section class="mainWrapper">
    <ContactForm />
    <!-- <form action=""></form> -->
  </section>
</main>
