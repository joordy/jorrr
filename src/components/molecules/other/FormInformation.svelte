<style lang="scss">
  @import 'src/styles/index.scss';
  section {
    h2 {
      font-family: 'Inter', sans-serif;
      font-size: $h2-size;
      margin-bottom: 3em;
    }
    p {
      font-family: 'Inter', sans-serif;
      margin-bottom: 2em;
    }
    div {
      ul {
        display: flex;
      }
      li {
        list-style-type: none;
        margin-right: 3em;
        &:nth-of-type(1) {
          a {
            &::before {
              content: '\f0e1';
            }
          }
        }
        &:nth-of-type(2) {
          a {
            &::before {
              content: '\f16d';
            }
          }
        }
        &:nth-of-type(3) {
          a {
            &::before {
              content: '\f09b';
            }
          }
        }
      }
      a {
        color: $ui-soft-white;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 auto;
        font-family: FontAwesome;
        font-weight: normal;
        font-style: normal;
        display: inline-block;
        text-decoration: inherit;
        font-size: 1.5rem;
        transition: 0.2s;
      }
    }
  }
</style>

<section>
  <h2>Neem contact op</h2>
  <p>Lorem ipsum dolor sit amet blaaaa blaa blaaa blaa</p>

  <div class="socialicons">
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/jordy-fronik-09426812b/"
          target="_blank"
        />
      </li>
      <li><a href="https://www.instagram.com/jorrr.dev/" target="_blank" /></li>
      <li><a href="https://github.com/joordy" target="_blank" /></li>
    </ul>
  </div>
</section>
