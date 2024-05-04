import { useTranslation } from "#ri18n";
export function useLangs() {
    let { i18n } = useTranslation();
    let lang = i18n.language;
    let toggleLang = function () {
       

        if (lang == "ar") setLang("en");
        else setLang("ar");
    };

    function autoSetDirLang() {
        if (lang == "ar") {
            document.documentElement.setAttribute("dir", "rtl");
            document.documentElement.setAttribute("lang", lang);
        } else {
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.setAttribute("lang", lang);
        }
    }
    function setLang(lang) {
        i18n.changeLanguage(lang);
        autoSetDirLang();
    }
    return {
        toggleLang,
        autoSetDirLang,
        setLang
    };
}
