import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <navbar className={cx('wrapper')}>
            <h1>Sidebar</h1>
            <div className={cx('inner')}></div>
        </navbar>
    );
}

export default Sidebar;
