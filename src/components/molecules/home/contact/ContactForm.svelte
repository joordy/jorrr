<script>
</script>

<style lang="scss">
  @import 'src/styles/index.scss';

  form {
    margin: 0 0 2rem;
    text-align: left;
    fieldset {
      border: none;
      input {
        -webkit-appearance: auto;
        -moz-appearance: auto;
        appearance: auto;
      }
      div {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        label {
          margin-bottom: 0.5rem;
        }
        input,
        textarea {
          border-radius: 4px;
          padding: 0.5rem;
          outline: none !important;
          border: 1px solid transparent;
          &:focus {
            border: 1px solid $ui-green;
            box-shadow: 0 0 10px #719ece;
          }
        }
      }
      input[type='submit'] {
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        border: none;
        background-color: $ui-green;
      }
    }
  }
</style>

<form action="https://formspree.io/f/xzbkwdoe" method="POST">
  <fieldset>
    <div>
      <label for="name">Naam:</label>
      <input type="text" id="name" name="name" placeholder="John Doe" />
    </div>
    <div>
      <label for="name">Email:</label>
      <input
        type="email"
        id="email"
        name="_replyto"
        placeholder="johndoe@mail.com"
      />
    </div>
    <div>
      <label for="name">Bericht</label>
      <textarea
        type="text"
        rows="10"
        name="message"
        placeholder="Enter text here"
      />
    </div>
    <input type="submit" value="Verzenden" />
  </fieldset>
</form>
