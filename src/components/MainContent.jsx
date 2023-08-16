/* eslint-disable jsx-a11y/heading-has-content */
const contentBox = [
    {
        title: "Title 1",
        description: "Description 1",
        price: "price 1",
    },
    {
        title: "Title 2",
        description: "Description 2",
        price: "price 2",
    },
    {
        title: "Title 3",
        description: "Description 3",
        price: "price 3",
    },
    {
        title: "Title 4",
        description: "Description 4",
        price: "price 4",
    },
]

export function MainContent() {
    return (
        <div>
            {
                contentBox.map((item) => {
                    return (
                        <div className="content__box">
                            <ul className="">
                                <li>{item.title}</li>
                                <li>{item.description}</li>
                                <li>{item.price}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}