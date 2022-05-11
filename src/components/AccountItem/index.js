import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('wrapper_avatar')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1652338800&x-signature=spQiXFqiGoHX9UEo2d3%2BuSgK0y0%3D"
                    alt="test1"
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
