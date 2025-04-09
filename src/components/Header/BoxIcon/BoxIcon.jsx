import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbicon.svg';
import igIcon from '@icons/svgs/ig.svg';
import ytbIcon from '@icons/svgs/ytbicon.svg';
function BoxIcon({ type, href }) {
    const { boxIcon } = styles;
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ig':
                return igIcon;
            case 'ytb':
                return ytbIcon;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
}

export default BoxIcon;
