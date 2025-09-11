function Contact() {
  return (
    <div id="contact" className="container contact">
      <h2 className="main-title text-center">İletişim</h2>
      <div className="contact-card contact-only-form">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input name="name" placeholder="Ad Soyad" className="contact-input" />
            <input name="email" placeholder="E-posta" className="contact-input" />
          </div>
          <input name="subject" placeholder="Konu" className="contact-input" />
          <textarea name="message" placeholder="Mesajınız" className="contact-textarea" />
          <button className="form-btn" type="submit">Mesajı Gönder</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
