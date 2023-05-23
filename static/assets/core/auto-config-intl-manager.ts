import l10n from './l10n-manager';
import { game, cclegacy } from 'cc';
// @ts-expect-error 
import { EDITOR } from 'cc/env';
if (cclegacy.GAME_VIEW || EDITOR) { // for Editor
    // @ts-expect-error we need top level await in Editor
    await l10n.createIntl({});

} else { // for Runtime or Preview
    const mapLanguage = (locale) => {
        const dict = {
            "vi-VN": "vi",
            "en-US": "en",
            "en-UK": "en",
            "th-TH": "th",
            "id-ID": "id",
            "zh-CN": "zh-Hans",
            "zh-TW": "zh-Hant"
        };
        return dict[locale] || "en";
    }

    const getLanguageFromUrlOrLocalStorage = () => {
        let language = localStorage.getItem(`current_language`) ?? "en";
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("lang")) {
            language = mapLanguage(urlParams.get("lang"));
        }

        return language;
    }         

    const language = getLanguageFromUrlOrLocalStorage();
    localStorage.setItem(`current_language`, language);

    game.onPostProjectInitDelegate.add(
        () => l10n.createIntl({language}),
    );
}

