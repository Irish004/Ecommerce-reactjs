import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadicon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import bagIcon from '@icons/svgs/bagicon.svg';
import viewIcon from '@icons/svgs/viewicon.svg';
function ProductItem({ src, prevSrc, name, price }) {
    console.log(prevSrc);
    const {
        boxImg,
        showImgWhenHover,
        showFnWhenHover,
        boxIcon,
        title,
        priceItem,
    } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt="" />
                <img src={prevSrc} alt="" className={showImgWhenHover} />
                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img src={bagIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={viewIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceItem}>${price}</div>
        </div>
    );
}

export default ProductItem;
