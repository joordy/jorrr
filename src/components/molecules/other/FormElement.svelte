<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    font-family: 'IBM Plex Mono', monospace;
    color: $ui-dark-blue;
    border-radius: 10px;
    background-color: white;
    form {
      width: 80%;
      margin: 0 auto;
      label {
        display: block;
      }
      input[type='text'],
      input[type='email'] {
        font-family: 'IBM Plex Mono', monospace;
        border-radius: 5px;
        height: 30px;
        width: calc(100% - 10px);
        padding: 0px 5px;
      }
    }
  }
</style>

<section>
  <form action="">
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
          name="email"
          placeholder="johndoe@mail.com"
        />
      </div>
      <div>
        <label for="name">Bericht</label>
        <textarea
          rows="6"
          cols="50"
          name="comment"
          placeholder="Enter text here"
        />
      </div>
      <input type="submit" value="Verzenden" />
    </fieldset>
  </form>
</section>
