import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
function HeadingListProduct({ data }) {
    const { container, containerItem } = styles;
    return (
        <>
            <div className={container}>
                <CountdownBanner />

                <div className={containerItem}>
                    {data.map((item, index) => {
                        return (
                            <ProductItem
                                key={index}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default HeadingListProduct;
