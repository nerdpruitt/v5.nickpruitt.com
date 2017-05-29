import React, {Component} from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import workData from './workData';
import WorkAPI from './WorkAPI';

// Add categories (aka what I did), image paths array

class WorkDetail extends Component {
    render() {
        const item = WorkAPI.getWorkItem(this.props.match.params.id, workData);

        return (
            <div>
                <div className="default">
                    <div></div>
                    <div className="text">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    };
}

class WorkItem extends Component {
    render() {
        const workId = this.props.value.id;

        return (
            <Link to={`/work/${workId}`}>{this.props.value.title}</Link>
        );
    };
}

class WorkList extends Component {
  render() {
    const workList = this.props.work;

    const workItems = workList.map((item) =>
      <div key={item.id}>
        <WorkItem value={item} />
      </div>
    );

    return(
      <div>
        {workItems}
      </div>
    );
  }

}

class WorkGrid extends Component {
    render() {
        return (
            <div>
                <div className="default">
                    <div></div>
                    <div className="text">
                        <h1>Work</h1>
                        <p>I have made things. Making things is awesome. You should make things too.</p>
                    </div>
                    <div></div>
                </div>
                <div>
                    <WorkList work={workData} />
                </div>
            </div>
        );
    }
}

const Work = () => (
    <div>
        <Switch>
            <Route exact path="/work" component={WorkGrid} />
            <Route path="/work/:id" component={WorkDetail} />
        </Switch>
    </div>
)

export default Work;