import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import classname from 'classnames/bind';
import styles from './Images.module.scss';
const Image = forwardRef(({ alt, src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    const cx = classname.bind(styles);
    return (
        <img
            className={cx('wrapper', className)}
            ref={ref}
            {...props}
            alt={alt}
            src={fallback || src}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
