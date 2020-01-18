import React from 'react'
import ReactDOM from 'react-dom'

// const style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'Arial'
// };

// const title = React.createElement(
//     'ul',
//     {id: 'title', className: 'header', style: style},
//     React.createElement(
//         'li',
//         {},
//         'item on our list'
//     )
// );

class Message extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1 style={{color: this.props.color}}>
                    {this.props.msg}
                </h1>
                <p>I'll check back in {this.props.minutes} minutes</p>
            </div>
        )
    }
}

ReactDOM.render(
    //title,
    // <div style={style}>
    //     <h1 id="heading-element">Hello World</h1>
    //     <p>We're glad you're here</p>
    // </div>,
    //ReactDOM.render(<Message />, document.getElementById('root')),
    <Message color="blue" msg="how are you?" minutes={5}/>,
    document.getElementById('root')
);

