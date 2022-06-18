import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AcountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <span className={cx('wrapper_avatar')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            </span>
            <div className={cx('info')}>
                <span className={cx('name')}>
                    <h4>{data.full_name}</h4>
                    <span className={cx('wrapper_icon')}>
                        {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />}
                    </span>
                </span>
                <span className={cx('userName')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AcountItem;
