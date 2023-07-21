import { useTransition } from "react-i18next"
import { Button, Container } from "./BtnLocales.styled";


export const BtnLocales = () => {
    const { i18n } = useTransition();

    const handleClickBtn = evt => {
        if (evt.target.nodeName !== "BUTTON") {
            return;
        }
        const currentBtn = document.querySelector(".activeBtn");
        if (currentBtn) {
            currentBtn.classList.remove("activeBtn");
        }
        evt.target.classList.toggle("activeBtn");
    };
    const changeLanguage = language => {
        i18n.changeLanguage(language);
    };

    return (
      <Container onClick={handleClickBtn}>
        <Button onClick={() => changeLanguage('en')}></Button>
        <Button onClick={() => changeLanguage('uk')}></Button>
        <Button onClick={() => changeLanguage('ru')}></Button>
      </Container>
    );
}