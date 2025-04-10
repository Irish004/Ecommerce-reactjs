import MainLayout from '@components/Layout/Layout';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '../../apis/productsService';
import PopularProduct from '@components/PopularProduct/PopularProduct';
function HomePage() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res.contents);
        });
    }, []);
    const { container } = styles;

    return (
        <>
            <div className={container}>
                <Header />
                <Banner />
                <MainLayout>
                    <Info />
                    <AdvanceHeadling />
                    <HeadingListProduct data={listProduct.slice(0, 2)} />
                    <PopularProduct
                        data={listProduct.slice(2, listProduct.length)}
                    />
                </MainLayout>
            </div>
        </>
    );
}

export default HomePage;
