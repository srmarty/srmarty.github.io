import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import AboutMe from '../AboutMe';

export default class ReactRouterExample extends React.Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={AboutMe} />
                    {this.props.children}
                </Switch>
            </div>
        )
    }
}