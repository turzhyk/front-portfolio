import React from "react";
import styles from "./styles.module.css";

const massageTypes = [
  "Relaksacyjny",
  "Leczniczy",
  "Sportowy",
  "Klasyczny",
  "Gorącymi kamieniami",
] as const;

export type MassageType = (typeof massageTypes)[number];

interface MassageTypeRadioProps {
  value: MassageType | "";
  onChange: (value: MassageType) => void;
}

export const MassageTypeRadio: React.FC<MassageTypeRadioProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className={styles.massage_type}>
      <p>Typ masażu</p>
<div className={styles.items}>{massageTypes.map((type) => (
        <label
          key={type}
         
        >
          <input
            type="radio"
            name="massageType"
            value={type}
            checked={value === type}
            onChange={() => onChange(type)}
          />
          {type}
        </label>
      ))}</div>
      
    </div>
  );
};