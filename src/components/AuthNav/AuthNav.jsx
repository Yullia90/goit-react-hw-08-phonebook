import { LinkNav } from "./AuthNav.styled";
import{useTranslation} from "react-i18next"

export const AuthNav = () => {
    const { t } = useTranslation();
    return (
        <div>
            <LinkNav to="/register">{t("REgister")}</LinkNav>
            <LinkNav to="/login">{t("Log In")}</LinkNav>
        </div>
    );
};