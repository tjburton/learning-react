import React, {Component} from 'react'
import {render} from 'react-dom'

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
        </section>
    )
};

const Library = () => {
    return (
        <div>
            <Book title="The Sun Also Rises" author="Earnest Hemmingway" pages={260} />
            <Book title="The Catcher in the Rye" author="J.D. Sallenger" pages={210} />
            <Book title="Pride and Prejudice" author="Jane Austin" pages={380} />
        </div>
    )
};

render(
    <Library />,
    document.getElementById('root')
);

