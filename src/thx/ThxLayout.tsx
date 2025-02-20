import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import moon from "../assets/moon.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  const submit = () => {
    window.gtag("event", "sub_get_4116", {
      variant_name: "4116_1",
    });
  };

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={moon}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Сервис ещё в работе
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы выбираем лучшие штучки, чтобы вам точно понравилось. С нетерпением
          ждём, когда всё заработает, чтобы показать вам.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          onClick={submit}
          block
          view="primary"
          href="https://online.alfabank.ru/debit_card_showcase?flowType=KIDS"
        >
          Оформить карту
        </ButtonMobile>
      </div>
    </>
  );
};
