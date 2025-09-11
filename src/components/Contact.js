import { useLanguage } from '../contexts/LanguageContext';

function Contact() {
  const { t } = useLanguage();
  return (
    <div id="contact" className="container contact">
      <h2 className="main-title text-center">{t('contact.title')}</h2>
      <div className="contact-card contact-only-form">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input name="name" placeholder={t('contact.form.name')} className="contact-input" />
            <input name="email" placeholder={t('contact.form.email')} className="contact-input" />
          </div>
          <input name="subject" placeholder={t('contact.form.subject')} className="contact-input" />
          <textarea name="message" placeholder={t('contact.form.message')} className="contact-textarea" />
          <button className="form-btn" type="submit">{t('contact.form.submit')}</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
