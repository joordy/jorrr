<script>
  import Saos from 'saos'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  @include size-s {
    @-webkit-keyframes -global-from-bottom {
      0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes -global-from-bottom {
      0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>

<Saos
  animation={'from-bottom 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
  once="true"
>
  <slot />
</Saos>
