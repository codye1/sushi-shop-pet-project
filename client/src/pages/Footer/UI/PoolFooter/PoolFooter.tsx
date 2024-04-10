import { useTranslation } from "react-i18next";
import "./PoolFooter.css"

const PoolFooter = () => {

    const {t} = useTranslation()

    return (
        <div className="poll">
            <div className="pool-text">
                <h1>{t('footer.pool.title')}</h1>
                <h2>{t('footer.pool.description')}</h2>
            </div>
            <div className="poll-button">
                {t('footer.pool.button')}
            </div>
        </div>
    );
};

export default PoolFooter;