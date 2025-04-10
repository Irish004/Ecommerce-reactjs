import MainLayout from '@components/Layout/Layout';
import { dataInfo } from './constant';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';
function Info() {
    const { container } = styles;
    return (
        <>
            <div className={container}>
                {dataInfo.map((item) => {
                    return (
                        <InfoCard
                            title={item.title}
                            description={item.description}
                            src={item.src}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Info;
