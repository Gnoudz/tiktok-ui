import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <span className={cx('wrapper')}>
            <h1>Sidebar</h1>
            <div className={cx('inner')}></div>
        </span>
    );
}

export default Sidebar;
