import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import classname from 'classnames/bind';
import styles from './Images.module.scss';
const Image = forwardRef(({ alt, src, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.defaultImahe);
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

export default Image;
