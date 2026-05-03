import { Header } from "../Modules/Header/Header";
import { Footer } from "../Modules/Footer";
import "./privacy.css";
import { Link } from "react-router-dom";
export default function Privacy() {
  return (
    <>
      <main className="page">
        <Header />
        <section className="privacy-page">
          <div className="container">
            <div className="arrow-container"> <Link className="arrow-back" to="/web">&larr;</Link></div>
           
            <h2> Polityka Prywatności serwisu Turzan.pl</h2>
            <code>Ostatnia aktualizacja: 1 maja 2026 r.</code>
            <h3> 1. Informacje ogólne</h3>
            <p>
              Administratorem Twoich danych osobowych jest Andrii Turzhanskyi,
              właściciel serwisu Turzan.pl. W razie pytań dotyczących
              przetwarzania danych, możesz skontaktować się ze mną pod adresem
              e-mail: andrewturzh@gmail.com.
            </p>
            <h3> 2. Jakie dane zbieram?</h3>
            <p>
              Przetwarzam dane, które dobrowolnie podajesz w formularzu
              kontaktowym: Imię i nazwisko (lub nazwa firmy). Adres e-mail.
              Treść wiadomości.
            </p>
            <h3>3. Cel przetwarzania danych</h3>
            <p>
              Twoje dane są mi potrzebne wyłącznie do: Odpowiedzi na Twoje
              zapytanie ofertowe. Realizacji współpracy biznesowej. Nie
              wykorzystuję Twoich danych do celów marketingowych ani nie wysyłam
              spamu.
            </p>
            <h3> 4. Kto ma dostęp do danych?</h3>
            <p>
              Twoje dane nie są sprzedawane osobom trzecim. Korzystam jednak z
              usług zaufanych partnerów technologicznych, aby strona mogła
              funkcjonować: Vercel: Dostawca hostingu (przechowywanie plików
              strony). EmailJS: Usługa, która technicznie przesyła Twoją
              wiadomość z formularza na moją skrzynkę e-mail.
            </p>
            <h3>5. Twoje prawa (RODO)</h3>
            <p>
              Masz pełne prawo do: Wglądu w swoje dane. Prośby o ich poprawienie
              lub całkowite usunięcie. Wycofania zgody na przetwarzanie w
              dowolnym momencie.
            </p>
            <h3> 6. Pliki Cookies</h3>
            <p>
              Strona może korzystać z technicznych plików cookies niezbędnych do
              prawidłowego wyświetlania witryny i zapewnienia jej
              bezpieczeństwa. Nie stosuję inwazyjnych ciasteczek śledzących
              Twoją aktywność poza moją witryną.
            </p>
            <p></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
