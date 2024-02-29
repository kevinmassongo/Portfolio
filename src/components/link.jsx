function Links ({href, children, style}) {
    return (
        <li><a href={href} className={style}>{children}</a></li>
    )
}

export default Links;