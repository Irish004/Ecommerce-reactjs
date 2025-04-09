import MainLayout from '@components/Layout/Layout';
import { dataInfo } from './constant';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';
function Info() {
    const { container } = styles;
    return (
        <>
            <MainLayout>
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
            </MainLayout>
        </>
    );
}

export default Info;
