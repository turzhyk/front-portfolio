import { useState } from "react";
import styles from "./Contact.module.css";
import { Calendar, Calendar1, Car, Locate, Mail, Phone, ShieldCheck, User } from "lucide-react";
import { ToothSvg } from "./SVG/ToothSvg";
import { ToothBigSvg } from "./SVG/ToothBigSvg";

interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

const initialState: ContactFormState = {
  fullName: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire up submission
    console.log(form);
  };

  return (
    <section className={styles.contact}>
      <h3>KONTAKT</h3>
      <h2>Umów wizytę</h2>
      <p>Skontaktuj się z nami i wybierz dogodny termin wizyty.</p>

      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Form card */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div className={styles.iconCircle}>
                <Calendar/>
              </div>
              <div>
                <h4 className={styles.formTitle}>Umów wizytę</h4>
                <p className={styles.formSubtitle}>
                  Wypełnij formularz, a my skontaktujemy się z Tobą w celu
                  potwierdzenia terminu.
                </p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="fullName">Imię i nazwisko *</label>
                  <div className={styles.inputWrapper}>
                    <User className={styles.inputIcon}/>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="np. Jan Kowalski"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Numer telefonu *</label>
                  <div className={styles.inputWrapper}>
                   <Phone className={styles.inputIcon}/>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="np. 600 123 456"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="email">Adres e-mail</label>
                  <div className={styles.inputWrapper}>
                    <Mail className={styles.inputIcon}/>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="np. jan.kowalski@email.pl"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="date">Preferowana data wizyty</label>
                  <div className={styles.inputWrapper}>
                   <Calendar className={styles.inputIcon}/>
                    <select
                      id="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                    >
                      <option value="">Wybierz datę</option>
                    </select>
                    <img src="/icons/chevron-down.svg" alt="" className={styles.selectChevron} />
                  </div>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="time">Preferowana godzina</label>
                  <div className={styles.inputWrapper}>
                    <img src="/icons/clock.svg" alt="" className={styles.inputIcon} />
                    <select
                      id="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                    >
                      <option value="">Wybierz godzinę</option>
                    </select>
                    <img src="/icons/chevron-down.svg" alt="" className={styles.selectChevron} />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="service">Wybierz usługę</label>
                  <div className={styles.inputWrapper}>
                    <ToothSvg className={styles.inputIcon} size={20} thickness={1} />
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Wybierz usługę</option>
                    </select>
                    <img src="/icons/chevron-down.svg" alt="" className={styles.selectChevron} />
                  </div>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Dodatkowe informacje (opcjonalnie)</label>
                <div className={styles.textareaWrapper}>
                  <img src="/icons/message.svg" alt="" className={styles.textareaIcon} />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Opisz krótko swój problem lub oczekiwania dotyczące wizyty..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
              </div>

              <div className={styles.formFooter}>
                <div className={styles.privacyNote}>
                  <ShieldCheck/>
                  <span>Twoje dane są bezpieczne i nie udostępniamy ich osobom trzecim.</span>
                </div>
                <button type="submit" className={styles.submitButton}>
                
                  Wyślij zapytanie
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.infoCard}>
              <div className={styles.infoHeader}>
                <div className={styles.iconCircle}>
                  <ToothBigSvg className={styles.icon} size={40} thickness={1}/>
                </div>
                <h4 className={styles.infoTitle}>Dane kontaktowe</h4>
              </div>

              <ul className={styles.infoList}>
                <li className={styles.item}>
                  <div className={styles.itemIconCircle}>
                   <Phone size={25} className={styles.itemIcon} />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>Telefon</span>
                    <a href="tel:600123456" className={styles.itemLink}>600 123 456</a>
                    <span className={styles.itemNote}>Pon. – Pt.: 8:00 – 20:00</span>
                  </div>
                </li>

                <li className={styles.item}>
                  <div className={styles.itemIconCircle}>
                   <Mail size={25}  className={styles.itemIcon} />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>E-mail</span>
                    <a href="mailto:kontakt@usmiechstomatologia.pl" className={styles.itemLink}>
                      kontakt@usmiechstomatologia.pl
                    </a>
                    <span className={styles.itemNote}>Odpowiadamy w ciągu 24h</span>
                  </div>
                </li>

                <li className={styles.item}>
                  <div className={styles.itemIconCircle}>
                    <Locate  size={25}  className={styles.itemIcon} />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>Adres</span>
                    <span className={styles.itemLink}>ul. Uśmiechnięta 15, 60-001 Poznań</span>
                    <a href="#map" className={styles.itemAction}>Zobacz na mapie</a>
                  </div>
                </li>

                <li className={styles.item}>
                  <div className={styles.itemIconCircle}>
                   <Calendar1  size={25}  className={styles.itemIcon} />
                  </div>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>Godziny otwarcia</span>
                    <span className={styles.itemNote}>Pon. – Pt.: 8:00 – 20:00</span>
                    <span className={styles.itemNote}>Sobota: 9:00 – 14:00</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.mapCard}>
              <div className={styles.mapImageWrapper}>
                <img src="/images/demo/dentysta_contact_1.webp" alt="Mapa dojazdu" className={styles.mapImage} />
              </div>
              <div className={styles.mapFooter}>
                <div className={styles.itemIconCircle}>
                <Car className={styles.itemIcon}/>
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Darmowy parking dla pacjentów</span>
                  <span className={styles.itemNote}>Wjazd od ul. Uśmiechniętej</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banners */}
        <div className={styles.banners}>
          <div className={styles.banner}>
            <div className={styles.itemIconCircle}>
             <Phone className={styles.itemIcon} />
            </div>
            <div className={styles.itemContent}>
              <span className={styles.bannerTitle}>Wolisz umówić się telefonicznie?</span>
              <span className={styles.itemNote}>
                Zadzwoń do nas – chętnie pomożemy wybrać dogodny termin.
              </span>
            </div>
            <a href="tel:600123456" className={styles.bannerButton}>
                <Phone className={styles.buttonIcon} />
             
              600 123 456
            </a>
          </div>

          {/* <div className={styles.banner}>
            <div className={styles.itemIconCircle}>
              <img src="/icons/shield-check.svg" alt="" className={styles.itemIcon} />
            </div>
            <div className={styles.itemContent}>
              <span className={styles.bannerTitle}>Pierwsza wizyta?</span>
              <span className={styles.itemNote}>
                Przygotuj dowód osobisty i listę aktualnie przyjmowanych leków.
              </span>
            </div>
            <a href="#first-visit" className={styles.bannerArrow}>
              <img src="/icons/arrow-right.svg" alt="" className={styles.icon} />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
