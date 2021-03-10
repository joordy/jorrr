<script>
  import { gsap } from 'gsap'
</script>

<style lang="scss">
</style>

<div use:gsap.from={{ duration: 1.5, opacity: 0, scale: 0.9, y: -50 }}>
  <slot />
</div>
