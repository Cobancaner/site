function Contact() {
  return (
    <div id="contact" className="container contact">
      <h2 className="main-title text-center">İletişim</h2>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Ad Soyad" className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="E-posta" className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Konu"
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Mesajınız"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Mesajı Gönder" />
        </div>
      </div>
    </div>
  );
}
export default Contact;
