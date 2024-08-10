export const NavList = (props)=>{
    return(
        <li>
            <a href={props.link}>
                <i className={props.class}></i>
                <span className="links_name">{props.name}</span>
            </a>
            <span className="tooltip">{props.name}</span>
        </li>
    )
}