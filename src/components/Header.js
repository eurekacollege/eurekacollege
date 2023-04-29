export default function Header({style, children, tag}) {
    return(
        <div className={style} id={tag}>
           {children}
        </div>
    )
}