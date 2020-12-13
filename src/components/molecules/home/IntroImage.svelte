<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    display: none;
    @media (min-width: 900px) {
      display: block;
      height: 500px;
      width: 50%;
      border-radius: 5px;
      background-color: #c4c4c4;
      position: absolute;
      top: 25%;
      right: -15vw;
    }
    @media (min-width: 1180px) {
      width: 60%;
    }
    @media (min-width: 1800px) {
      right: 0;
    }
  }
</style>

<section />
