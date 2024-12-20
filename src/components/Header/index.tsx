interface HeaderProps {
    urlLogo : string;
    children : React.ReactNode;
}

const Header = (props : HeaderProps) => {
    return (
        <header>
            <img src={props.urlLogo} alt="Logo" />
            <div>{props.children}</div>
        </header>
    )
};

export default Header;