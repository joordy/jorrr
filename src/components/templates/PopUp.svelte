<script>
  // Animations
  import SlideBottom from '@/components/animations/SlideBottom.svelte'

  import ContactForm from '@/components/molecules/home/contact/ContactForm.svelte'

  // Svelte stores
  import { state } from '@/stores/contactPopup.js'

  let state_value

  const unsubscribe = state.subscribe((value) => {
    state_value = value
  })

  function changeState() {
    state.update((state) => (state = false))
  }
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(50, 50, 50, 0.7);
    z-index: 101;
    overflow: hidden;
    color: $ui-soft-white;
    text-align: right;
    article {
      box-shadow: 0px 0px 15px #5d5b5b;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      background-color: #161617;
      width: 80%;
      max-width: 700px;
      margin: 0 auto;
      padding: 2rem;
      border-radius: 1rem;
      button {
        border: none;
        outline: none;
        color: transparent;
        background-color: transparent;
        span {
          position: absolute;
          right: 2rem;
          top: 2rem;
          transition: 0.2s;
          &:hover {
            transform: scale(1.05);
            svg {
              path {
                fill: $ui-green;
              }
            }
          }
          svg {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
</style>

<section class="Popup">
  <article>
    <button on:click={changeState}>
      <span>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 0C10.6286 0 0 10.6286 0 24C0 37.3714 10.6286 48 24 48C37.3714 48 48 37.3714 48 24C48 10.6286 37.3714 0 24 0ZM33.2571 36L24 26.7429L14.7429 36L12 33.2571L21.2571 24L12 14.7429L14.7429 12L24 21.2571L33.2571 12L36 14.7429L26.7429 24L36 33.2571L33.2571 36Z"
            fill="white"
          />
        </svg>
      </span>
      Close
    </button>
    <ContactForm />
  </article>
</section>
