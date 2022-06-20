// React Hooks
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
// FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Thư viện Tippy
import Tippy from '@tippyjs/react';
// Import Style
import className from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

// Import thư mục trong dự án

import images from '~/asset/images';
import Button from '~/components/Button';
import {
    CoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    PlusIcon,
    ProfileIcon,
    QuestionIcon,
    SettingIcon,
} from '~/components/Icons';
import Image from '~/components/images';
import Menu from '~/components/Popper/Menu';
import Search from '../Search/Search';
import styles from './Header.module.scss';
import config from '~/config';
const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vn', title: 'Tiếng việt' },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/user',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    //HandleLogic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle language;
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button outlineNoneColor leftIcon={<PlusIcon />} className={'uploadButton'}>
                                Upload
                            </Button>

                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn', 'message-btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" className={cx('MessageIcon')} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outlineNoneColor leftIcon={<PlusIcon />} className={'uploadButton'}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://graph.facebook.com/1426815194369454/picture?width=400&height=400"
                                alt=""
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon')}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
