const Header2 = () =>
{
    return (
        <header>
            <h1>야구게임 방식</h1>
        </header>
    );
};


function Header(props)
{
    return (
        <header>
            <h1>{props.data}</h1>
        </header>
    );
}

export default Header;