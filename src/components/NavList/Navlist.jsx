export default function Navlist() {
    const link = [
        {
            id: 0,
            title: 'Platform',
        },
        {
            id: 1,
            title: 'Widgets',
        },
        {
            id: 2,
            title: 'Templates',
        },
        {
            id: 3,
            title: 'Pricing',
        }
    ]
    let list = link.map(item => <li key={item.id}>{item.title}</li>)
    return(
        <ul className="nav-list">
            {list}
        </ul>
    )
}