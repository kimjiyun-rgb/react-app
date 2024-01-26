function Article(props)
{
    const data = props.data;
    return (
        <article>
            <table border="1">
                <tbody>
                    <tr>
                        <td>
                            <div><strong>횟수</strong></div>
                        </td>
                        <td colSpan="3">
                            <div><strong>숫자</strong></div>
                        </td>
                        <td>
                            <div><strong>판정</strong></div>
                        </td>
                    </tr>
                    {
                        data.map((v) =>
                        {
                            return (
                                <tr>
                                    <td>
                                        <div><strong>{v[0]}</strong></div>
                                    </td>
                                    <td>
                                        <div>{v[1]}</div>
                                    </td>
                                    <td>
                                        <div>{v[2]}</div>
                                    </td>
                                    <td>
                                        <div>{v[3]}</div>
                                    </td>
                                    <td>
                                        <div>{v[4]}</div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </article>
    );
}

export default Article;