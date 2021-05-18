<script>
  // Components
  import Image from '@/components/atoms/home/intro/Image.svelte'
  import Icons from '@/components/atoms/home/intro/Icons.svelte'

  // let src = 'PictureOfMe.svg'
  let src = '/assets/me.svg'
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  aside {
    position: relative;
    width: 100%;
    min-height: 350px;
    margin: 0 auto 2em auto;
    @include size-m {
      margin: 0 auto;
    }
    /* margin: 0 auto 2em auto;
    width: 100%;
    max-width: 395px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2em;
    max-height: 330px;
    @include size-m {
      margin: 0 0 2em auto;
    } */
  }
</style>

<aside>
  <Image {src} />
  <Icons />
</aside>
