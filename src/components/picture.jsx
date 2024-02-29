function Picture ({src, alt, style}) {
    return (
        <img src={src} alt={alt} className={style}/>
    )
}

export default Picture;