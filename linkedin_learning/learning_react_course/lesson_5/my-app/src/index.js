import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
    {
        "title": "The Shining",
        "author": "Stephen King",
        "pages": 430
    },
    {
        "title": "Doctor Sleep",
        "author": "Stephen King",
        "pages": 360
    },
    {
        "title": "Romeo and Juliet",
        "author": "William Shakespeare",
        "pages": 190
    }
];

const Book = ({title, author, pages}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no'}</p>
        </section>
    )
};

class Library extends React.Component {

    state = {
        open: true,
        freeBookmark: true
    };

    // Look up binding this and how that works with arrow functions.
    // Look up 'Lifting State Up' in React documentation.
    toggleOpenClosed = () => {
        this.setState(previousState => ({
            open: !previousState.open
        }));
    };

    render() {
        console.log(this.state);
        const { books } = this.props;
        return (
            <div>
                <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            freeBookmark={this.state.freeBookmark}/>
                )}
            </div>
        );
    }
}

render(
    <Library books={{bookList}} />,
    document.getElementById('root')
);

