function Links ({href, children, style}) {
    return (
        <li><a href={href} target="_blank" className={style}>{children}</a></li>
    )
}

export default Links;