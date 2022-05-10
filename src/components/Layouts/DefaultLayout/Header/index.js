import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../../Popper';
import Menu from '../../../Popper/Menu';
import styles from './HeaderDefault.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change to language
                break;
            default:
            // Default
        }
    };

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
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;