import TippyHeadeless from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import AcountItem from '~/components/AccountItem';
import { LoadingIcon, SearchIcon, ClearIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';
const cx = classNames.bind(styles);
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchService.search(debounceValue);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

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
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        //Using a wrapper <div> or <span> tag around the reference element
        //solves this by creating a new parentNode context
        <span>
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
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadeless>
        </span>
    );
}

export default Search;
