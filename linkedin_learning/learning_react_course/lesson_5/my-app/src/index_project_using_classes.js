import React, {Component} from 'react'
import {render} from 'react-dom'

let runData = {
    total: 50,
    dry: 20,
    warm: 10,
    goal: 100
};

class RunDayCounter extends Component {
    getPercent = decimal => {
        return decimal * 100 + '%';
    };

    calcGoalProgress = (total, goal) => {
        return this.getPercent(total/goal);
    };

    render() {
        const {total, dry, warm, goal} = this.props;
        return (
            <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Dry Days: {dry}</p>
                </div>
                <div>
                    <p>Warm Days: {warm}</p>
                </div>
                <div>
                    <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
                </div>
            </section>
        )
    }
}

render(
    <RunDayCounter
        total={runData.total}
        dry={runData.dry}
        warm={runData.warm}
        goal={runData.goal}
    />,
    document.getElementById('root')
);

