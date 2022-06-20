import className from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
const cx = className.bind(styles);

function Button({
    to,
    href,
    children,
    primary = false,
    text = false,
    disabled = false,
    rounded = false,
    outline = false,
    outlineNoneColor = false,
    small = false,
    large = false,
    className = false,
    rightIcon = false,
    leftIcon = false,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //Remove event listener when btn is disabled
    if (disabled) {
        // delete props.onClick;
        Object.keys(
            props.forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            }),
        );
    }

    const style = {
        primary,
        outline,
        outlineNoneColor,
        text,
        disabled,
        rounded,
    };

    const size = {
        small,
        large,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx(
        'wrapper',
        { ...style },
        { ...size },
        {
            [className]: className,
        },
    );
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    outlineNoneColor: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
