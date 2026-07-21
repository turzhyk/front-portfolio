import React from 'react';
import styles from './Team.module.css';

interface Doctor {
  id: string;
  photo: string;
  icon: string;
  name: string;
  specialty: string;
  description: string;
}

const doctors: Doctor[] = [
  {
    id: 'anna-kowalska',
    photo: '/images/demo/dentysta_team_1.webp',
    icon: '/icons/tooth.svg',
    name: 'lek. Anna Kowalska',
    specialty: 'Stomatolog zachowawczy',
    description: 'Specjalizuje się w leczeniu zachowawczym i estetycznej odbudowie zębów.',
  },
  {
    id: 'piotr-nowak',
     photo: '/images/demo/dentysta_team_2.webp',
    icon: '/icons/implant.svg',
    name: 'lek. Piotr Nowak',
    specialty: 'Implantolog',
    description: 'Ekspert w dziedzinie implantologii i chirurgii stomatologicznej.',
  },
  {
    id: 'marta-wisniewska',
     photo: '/images/demo/dentysta_team_3.webp',
    icon: '/icons/sparkle.svg',
    name: 'lek. Marta Wiśniewska',
    specialty: 'Stomatolog estetyczny',
    description: 'Specjalizuje się w stomatologii estetycznej, wybielaniu i licówkach porcelanowych.',
  },
  {
    id: 'tomasz-zielinski',
 photo: '/images/demo/dentysta_team_4.webp',
    icon: '/icons/shield-check.svg',
    name: 'lek. Tomasz Zieliński',
    specialty: 'Diagnostyka',
    description: 'Odpowiada za precyzyjną diagnostykę i planowanie leczenia.',
  },
];

const Team: React.FC = () => {
  return (
    <section className={styles.team}>
      <h3>NASZ ZESPÓŁ</h3>
      <h2>Poznaj naszych lekarzy</h2>
      <p>
        Nasi specjaliści to doświadczeni stomatolodzy, dla których najważniejsze jest zdrowie
        i komfort pacjentów.
      </p>

      <div className={styles.content}>
        {doctors.map((doctor) => (
          <div className={styles.item} key={doctor.id}>
            <div className={styles.photo}>
              <img src={doctor.photo} alt={doctor.name} />
              {/* <span className={styles.icon}>
                
              </span> */}
            </div>

            <div className={styles.info}>
              <h4 className={styles.name}>{doctor.name}</h4>
              <span className={styles.specialty}>{doctor.specialty}</span>

              <div className={styles.divider} />

              <p className={styles.description}>{doctor.description}</p>

           
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
};

export default Team;