import { useEffect, useState } from 'react';

import className from 'classnames/bind';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import TippyHeadeless from '@tippyjs/react/headless';

import images from '~/asset/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = className.bind(styles);
console.log(TippyHeadeless);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <TippyHeadeless
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear-icon')} />
                        </button>
                        {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading-icon')} /> */}
                        <span />
                        <Tippy content="Tìm kiếm">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </TippyHeadeless>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
