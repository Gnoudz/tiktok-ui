import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../images';

const cx = classNames.bind(styles);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('wrapper_avatar')}>
                <Image
                    className={cx('avatar')}
                    src="https://i.pinimg.com/564x/9a/fd/cf/9afdcf1c97ced76d8035c9bbb891fa79.jpg"
                    alt=""
                />
            </span>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <h4>Đồng Minh Dương</h4>
                    <span className={cx('wrapper_icon')}>
                        <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                    </span>
                </p>
                <span className={cx('userName')}>Gnoud</span>
            </div>
        </div>
    );
}

export default AcountItem;
