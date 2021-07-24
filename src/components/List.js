const List = (props) => {
    return (
        <div className="container">
            <h2 data-testid="title" className="mb-3">{ props.title }</h2>
            <p data-testid="subtitle">
                { props.subtitle }
            </p>
            <ul data-testid="list">
            {props.items.map((item, idx) => {
                return (
                    <li key={idx} className="mt-3">
                        { item }
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default List;