const Image = ({
    src,
    alt,
    width,
    height,
    className = "",
    rounded = false,
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`object-contain ${rounded ? "rounded-lg" : ""} ${className}`}
            loading="lazy"
        />
    );
};

export default Image;