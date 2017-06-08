import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import WorkMain from './WorkMain';
import WorkDetail from './WorkDetail';

const Work = () => (
    <div>
        <Switch>
            <Route exact path="/work" component={WorkMain} />
            <Route path="/work/:id" component={WorkDetail} />
        </Switch>
    </div>
)

export default Work;
