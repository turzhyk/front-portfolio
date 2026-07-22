import styles from "./Faq.module.css";
import { FaqElement } from "./FaqElement";
import { useInView } from "../useInView";
import clsx from "clsx";
export default function Faq() {
  const { ref, isVisible } = useInView(0.2);
  return (
    <section
      ref={ref}
      id="faq"
      className={clsx(styles.faq, isVisible && styles.visible)}
    >
      <h2>Odpowiedzi na pytania</h2>
     
      <div className={styles.wrapper}>
        <FaqElement
          title="Czy leczenie zębów boli?"
          text="Współczesna stomatologia pozwala na bezbolesne leczenie dzięki skutecznemu znieczuleniu miejscowemu. Dbamy o komfort pacjenta na każdym etapie wizyty."
        />

        <FaqElement
          title="Jak często należy odwiedzać dentystę?"
          text="Zalecamy wizytę kontrolną co 6 miesięcy. Regularne kontrole pozwalają wykryć problemy na wczesnym etapie i uniknąć kosztownego leczenia."
        />

        <FaqElement
          title="Ile trwa pierwsza wizyta?"
          text="Pierwsza wizyta trwa zazwyczaj od 30 do 60 minut. Obejmuje wywiad medyczny, badanie jamy ustnej oraz omówienie planu leczenia."
        />

        <FaqElement
          title="Czy wykonujecie zdjęcia RTG na miejscu?"
          text="Tak, w naszej klinice wykonujemy nowoczesne zdjęcia RTG, co pozwala szybko postawić trafną diagnozę i rozpocząć leczenie."
        />

        <FaqElement
          title="Jak przygotować się do wizyty u dentysty?"
          text="Przed wizytą warto dokładnie umyć zęby oraz zabrać dokumentację medyczną, jeśli była prowadzona wcześniej. W przypadku przyjmowania leków poinformuj o tym lekarza."
        />

        <FaqElement
          title="Czy przyjmujecie dzieci?"
          text="Tak, oferujemy opiekę stomatologiczną dla dzieci. Dbamy o przyjazną atmosferę, aby najmłodsi pacjenci czuli się bezpiecznie i komfortowo."
        />

        <FaqElement
          title="Jak długo utrzymuje się znieczulenie?"
          text="Znieczulenie miejscowe działa zazwyczaj od 2 do 4 godzin, w zależności od zastosowanego preparatu i indywidualnych predyspozycji pacjenta."
        />

        <FaqElement
          title="Czy można wybielić zęby w jeden dzień?"
          text="Tak, oferujemy profesjonalne wybielanie gabinetowe, które pozwala uzyskać widoczny efekt już podczas jednej wizyty."
        />

        <FaqElement
          title="Co zrobić w przypadku bólu zęba?"
          text="W przypadku silnego bólu należy jak najszybciej umówić wizytę. Nie należy odkładać leczenia, ponieważ ból może świadczyć o rozwijającym się stanie zapalnym."
        />

        <FaqElement
          title="Jak długo trwa leczenie kanałowe?"
          text="Czas leczenia zależy od stopnia skomplikowania przypadku. W wielu sytuacjach leczenie kanałowe można zakończyć podczas jednej wizyty."
        />

        <FaqElement
          title="Czy wykonujecie implanty zębowe?"
          text="Tak, wykonujemy leczenie implantologiczne. Po konsultacji lekarz oceni warunki kostne i zaproponuje najlepsze rozwiązanie."
        />

        <FaqElement
          title="Jak dbać o zęby po leczeniu?"
          text="Należy przestrzegać zaleceń lekarza, regularnie szczotkować zęby, używać nici dentystycznej oraz zgłaszać się na wizyty kontrolne i higienizację."
        />

        <FaqElement
          title="Czy można płacić kartą?"
          text="Tak, akceptujemy płatności kartą oraz innymi popularnymi metodami płatności bezgotówkowej."
        />

        <FaqElement
          title="Czy oferujecie profesjonalną higienizację zębów?"
          text="Tak, wykonujemy skaling, piaskowanie, polerowanie oraz fluoryzację. Regularna higienizacja pomaga zapobiegać próchnicy i chorobom dziąseł."
        />

        <FaqElement
          title="Jak umówić wizytę?"
          text="Wizytę można umówić telefonicznie lub poprzez formularz kontaktowy na naszej stronie internetowej. Dobierzemy dogodny termin konsultacji."
        />
      </div>
    </section>
  );
}
