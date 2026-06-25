import React, { useState } from "react";
import "./faq.css";
export default function Question({
  title,
  answer,
  open
}: {
  title: string;
  answer: string;
  open:boolean;
}) {
  const [opened, setOpened] = useState<boolean>(open);
  return (
    <div className={"question "+(opened? " opened":"")} onClick={()=>setOpened(!opened)}>

      <p className="title">
        <strong>{title}</strong>
        <img
          width={14}
          height={14}
          alt=""
          loading="lazy"
          src={opened?"svg/tri_full.svg":"svg/tri.svg"}
        />
      </p>
      <div className={"content"}><h3>Odpowiedź:</h3> <p>{answer}</p></div>
    </div>
  );
}
