<style lang="scss">
  @import 'src/styles/index.scss';

  section {
    color: $ui-dark-blue;
    border-radius: 10px;
    background-color: white;
    form {
      width: 100%;
      margin: 0 auto;
      fieldset {
        border: none;
        width: calc(100% - 4em);
        padding: 2em;
        display: inline-block;
        div {
          margin-bottom: 2em;
        }
        label {
          display: block;
          padding-bottom: 5px;
          font-weight: 700;
        }
        input[type='text'],
        input[type='email'],
        textarea {
          border-radius: 5px;
          border: 1px solid #c4c4c4;
          &:focus {
            outline: none;
            /* outline: 2px solid $ui-turquoise; */
            box-shadow: 0 0 2px 1px #079385;
          }
        }
        input[type='text'] {
          color: $ui-soft-white;
          height: 1.5rem;
          font-weight: normal;
          font-style: normal;
          display: inline-block;
          text-decoration: inherit;
          font-size: 1.5rem;
          transition: 0.2s;

          font-family: FontAwesome;
          font-size: 12px;

          &::before {
            content: '\f007';
          }
        }
        input[type='text'],
        input[type='email'] {
          height: 30px;
          width: calc(100% - 10px);
          padding: 0px 5px;
        }
        textarea {
          padding: 5px;
          width: calc(100% - 10px);
          resize: none;
        }
        input[type='submit'] {
          text-align: right;
        }
      }
    }
  }
</style>

<section>
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
      <button type="submit">Verzenden</button>
    </fieldset>
  </form>
</section>
