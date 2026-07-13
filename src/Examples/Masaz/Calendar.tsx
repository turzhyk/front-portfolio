import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { pl } from "date-fns/locale";


export default function Calendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <>
      <DayPicker
      locale={pl}
        mode="single"
        selected={selected}
        onSelect={setSelected}
          disabled={{ before: new Date() ,   dayOfWeek: [0, 1],}}
      />

      <p>{selected?.toLocaleDateString()}</p>
    </>
  );
}