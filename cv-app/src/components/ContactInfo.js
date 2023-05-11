import Counter from './Counter'

function ContactInfo() {
    return <div className="contact">
    <p className="title">Contact</p>
    <div className="contact-grid">
      <div>
        <p className="contact-heading">Adress</p>
        <p className="contact-item">Odessa, Ukraine</p>
      </div>
      <div>
        <p className="contact-heading">Phone</p>
        <p className="contact-item">+380963048542</p>
      </div>
      <div>
        <p className="contact-heading">E-Mail</p>
        <a
          href="mailto: vladlapitsky37@gmail.com"
          className="contact-item"
          id="contact-link"
        >
          vladlapitsky37@gmail.com
        </a>
      </div>
      <div>
        <p className="contact-heading">Facebook</p>
        <a
          href="https://www.facebook.com/Elstarion"
          className="contact-item"
          id="contact-link"
          target="_blank"
          rel="noreferrer"
        >
          facebook.com/Elstarion
        </a>
      </div>
    </div>
    <p className="title">Languages</p>
    <div>
      <p className="languages-items">Ukrainian - C2</p>
      <p className="languages-items">English - B2</p>
    </div>
    <Counter />

  </div>
}

function Photo(props) {
    return <img src={props.image} />
}

export {Photo, ContactInfo}
  