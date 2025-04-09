import styles from '../styles.module.scss';
function InfoCard({ title, description, src }) {
    const { containerCard, containerContent, titleCard, des } = styles;
    return (
        <div className={containerCard}>
            <img width={40} height={41} src={src} alt="" />
            <div className={containerContent}>
                <div className={titleCard}>{title}</div>
                <div className={des}>{description}</div>
            </div>
        </div>
    );
}

export default InfoCard;
