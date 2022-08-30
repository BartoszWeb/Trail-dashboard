interface Props {
    props: {
        size: string,
        src: string,
        alt: string
    };
}

const ImageComponent = ({ props }: Props) => {
    const { size, src, alt } = props;
    return (
        <img width={ size } src={ src } alt={ alt }/>
    );
};

export default ImageComponent;