import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

import styles from './HeaderDefault.module.scss';
import images from '../../../../assets/images';
import { Wrapper as PopperWrapper } from '../../../Popper';
import Button from '../../../Button';

const cx = classNames.bind(styles);


function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000)
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <Tippy
                visible={searchResult.length > 0}
                    render={attrs => (
                        
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>My tippy box</PopperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search-box')}>
                        <input placeholder="Enter text..." spellCheck={false} />
                        <div className={cx('search-action')}>
                            <button className={cx('clear-btn')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('spinner-icon')} icon={faSpinner} />
                        </div>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                        <Button text>
                            Upload
                        </Button>
                        <Button 
                            primary 
                            onClick={() => alert('Login')} 
                        >
                            Login
                        </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;