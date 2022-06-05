import TippyHeadeless from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css';
import AcountItem from '~/components/AccountItem';
import { LoadingIcon, SearchIcon, ClearIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleShowResult = () => {
        setShowResult(true);
    };

    const handleSpace = (e) => {
        console.log(e.target.value[0]);
        if (e.target.value[0] !== ' ') {
            setSearchValue(e.target.value);
        }
    };
    return (
        <TippyHeadeless
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => (
                            <AcountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => {
                        handleSpace(e);
                    }}
                    onFocus={handleShowResult}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <ClearIcon height="1.6rem" width="1.6rem" className={cx('clear-icon')} />
                    </button>
                )}
                {loading && <LoadingIcon height="1.6rem" width="1.6rem" className={cx('loading-icon')} />}
                <span />
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadeless>
    );
}

export default Search;
