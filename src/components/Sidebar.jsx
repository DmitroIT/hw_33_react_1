const sidebarList = [
    {
        name: "item_1"
    },
    {
        name: "item_2"
    },
    {
        name: "item_3"
    },
    {
        name: "item_4"
    },
    {
        name: "item_5"
    },
]

export function Sidebar() {
    return (
        <ul className="sidebar__list">
            {
                sidebarList.map((item) => {
                    return (
                        <li>{item.name}</li>
                    )
                })
            }
        </ul>
    );
}

export function Clear() {
    return (
        <div className="clearfix"></div>
    )
}
