
import "./offer.css";
import { useTranslation } from "react-i18next";
export const OfferOption2 = () => {

  const { t } = useTranslation();
  return (
    <div className="option2 option">
      <h3>{t("offer.offer2.h")}</h3>{" "}
      <p className="populartag"> {t("offer.offer2.popularTag")} </p>{" "}
      <div className="option-top">
        {" "}
        <ul>
          {" "}
          <li>
            {" "}
            <strong>{t("offer.offer2.features.0")}</strong>{" "}
          </li>{" "}
          <li>{t("offer.offer2.features.1")}</li>{" "}
          <li>{t("offer.offer2.features.2")}</li>{" "}
          <li>{t("offer.offer2.features.3")}</li>{" "}
          <li>{t("offer.offer2.features.4")}</li>{" "}
          <li>{t("offer.offer2.features.5")}</li>{" "}
        </ul>{" "}
        <div className="priceline">
          {" "}
          <p className="price">{t("offer.offer2.price")}</p>{" "}
          <p className="pricetag">{t("offer.offer2.pricetag")}</p>{" "}
        </div>{" "}
      </div>{" "}
      <a href="#contact">
        {" "}
        <div className="cte">{t("offer.offer2.cta")}</div>{" "}
      </a>
      <p className="deliverytime">
        <svg
          width="18"
          height="18"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M6.108,20H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2H17.892c-.247-2.774-1.071-7.61-3.826-9,2.564-1.423,3.453-4.81,3.764-7H20a1,1,0,0,0,0-2H4A1,1,0,0,0,4,4H6.17c.311,2.19,1.2,5.577,3.764,7C7.179,12.39,6.355,17.226,6.108,20ZM9,16.6c0-1.2,3-3.6,3-3.6s3,2.4,3,3.6V20H9Z"></path>
          </g>
        </svg>{" "}
        {t("offer.offer2.deliveryTime")}
      </p>
      <div className="divider" />
      <div className="footer">
        <ul>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 33L15.54 15.3871L22.8 24.6129L36 7"
                className="icon1"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            {t("offer.offer1.footer.stats")}
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="28"
                cy="14"
                r="10"
                fill="currentColor"
                className="icon2"
              />
              <path
                d="M5 28L11 33.5L15.5 28.64L23.5 20M15.5 28.64L11 24.5"
                className="icon2"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            {t("offer.offer1.footer.access")}
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="20"
                cy="20"
                r="15"
                stroke="currentColor"
                stroke-width="4"
                className="icon4"
              />
              <line
                x1="20"
                y1="4"
                x2="20"
                y2="36"
                stroke="currentColor"
                stroke-width="4"
                className="icon4"
              />
              <path
                d="M34 11.77C23.6334 18.5893 17.7103 18.2823 7 11.77"
                stroke="currentColor"
                className="icon4"
                stroke-width="3"
              />
              <path
                d="M7 27.77C17.3666 20.9507 23.2897 21.2578 34 27.77"
                stroke="currentColor"
                className="icon4"
                stroke-width="3"
              />
            </svg>
            {t("offer.offer1.footer.domain")}
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 38V6H4V38"
                stroke="currentColor"
                className="icon3"
                stroke-width="4"
              />
              <path
                d="M12 23.4L18 29L28 19"
                stroke="currentColor"
                className="icon3"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
            {t("offer.offer1.footer.invoice")}
          </li>
          <li className="owner">
            <svg
              width="20"
              height="20"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 16.5V34H34V16.5L20 5L6 16.5Z"
                stroke="currentColor"
                className="icon5"
                stroke-width="4"
                stroke-linecap="round"
              />
              <rect
                x="17"
                y="24"
                width="6"
                height="8"
                fill="currentColor"
                className="icon5"
              />
            </svg>
            {t("offer.offer1.footer.owner")}
          </li>
        </ul>
        <p className="disclaim">{t("offer.offer1.disclaimer")}</p>
      </div>
    </div>
  );
};
