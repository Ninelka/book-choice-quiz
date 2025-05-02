import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="flex flex-col items-center gap-2 p-2 absolute right-0 top-0">
            <select
                id="language-select"
                aria-label="Language select"
                value={i18n.language}
                onChange={changeLanguage}
                className="border rounded px-2 py-1 text-sm"
            >
                <option value="en">🇬🇧 English</option>
                <option value="ru">🇷🇺 Русский</option>
            </select>
        </div>
    );
};
