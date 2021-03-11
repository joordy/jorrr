<script>
  import Saos from 'saos'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  @include size-s {
    @keyframes -global-from-left {
      0% {
        -webkit-transform: translateY(100px) translateX(-100vw) scale(0.85);
        transform: translateY(100px) translateX(-100vw) scale(0.85);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0) translateX(0) scale(1);
        transform: translateY(0) translateX(0) scale(1);
        opacity: 1;
      }
    }
  }
</style>

<Saos
  animation={'from-left 1.05s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}
>
  <slot />
</Saos>
