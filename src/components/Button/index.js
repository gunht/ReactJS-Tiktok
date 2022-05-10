import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ 
    to,
    href, 
    primary = false, 
    outline = false,
    text = false,
    rounded = false,
    small = false, 
    large = false,
    disabled = false,
    icon = false,
    children,
    className,
    onClick, 
    ...passProps 
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        text,
        small,
        large,
        disabled,
    });

    // Remove event listener when disabled
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;