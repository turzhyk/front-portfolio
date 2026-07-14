import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { pl } from "date-fns/locale";
type CalendarProps = {
  onSelect: (date: Date | undefined) => void;
};

import styles from "./styles.module.css";
export default function Calendar({ onSelect }: CalendarProps)  {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className={styles.daypicker}>
      <h3>Wybież dogodny termin</h3>
      <DayPicker
        locale={pl}
        mode="single"
       selected={selected}
        onSelect={(date) => {
          setSelected(date);
          onSelect(date);
        }}
        disabled={{ before: new Date(), dayOfWeek: [0, 1] }}
      />

      {/* <p>{selected?.toLocaleDateString()}</p> */}
    </div>
  );
}
