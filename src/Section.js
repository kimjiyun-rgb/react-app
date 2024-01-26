function Section(props)
{
    return (
        <section>
            {
                props.data.map((v) =>
                {
                    return (
                        <h4>{v}</h4>
                    )
                })
            }
        </section>
    );
}

export default Section;