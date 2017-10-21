import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef, goalRef } from '../firebase';

class GoalItem extends Component {
    completeGoal() {
        // add to complete goal on database
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
        console.log('serverKey', serverKey);        
        completeGoalRef.push({ email, title });        
        // remove this goal from goals reference
        goalRef.child(serverKey).remove();
    }
    render() {
        const { index, goal } = this.props;
        return (
            <div key={index} style={{ margin: '5px' }}>
                <strong>{ goal.title }</strong>
                <span style={{ marginRight: '5px' }}> summited by <em>{ goal.email }</em></span>
                <button
                    className="btn btn-primary"
                    onClick={() => this.completeGoal()}
                >
                    Complete
                </button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(GoalItem);