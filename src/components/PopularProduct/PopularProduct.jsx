import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
function PopularProduct({ data }) {
    const { container } = styles;
    return (
        <div className={container}>
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
    );
}

export default PopularProduct;
