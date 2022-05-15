import classNames from 'classnames/bind';
import style from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(style);
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
