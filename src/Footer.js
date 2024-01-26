function Footer(props)
{
    return (
        <footer>
            {
                props.data.map((v, i) =>
                {
                    return (
                        <h5 key={i} onClick={(e) =>
                        {
                            e.target.style.backgroundColor = 'beige';
                            e.target.style.textDecoration = 'underline';
                        }}>{v}</h5>
                    )
                })
            }
        </footer>
    );
}

export default Footer;
