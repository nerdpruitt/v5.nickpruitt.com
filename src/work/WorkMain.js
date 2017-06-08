import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import workJson from './work.json';
import WorkAPI from './WorkAPI';

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

    const workItems = workList.map( ( item ) =>
      <div className="work-list__item" key={item.id}>
        <WorkItem value={item} />
      </div>
    );

    return(
      <div className="work-list">
        {workItems}
      </div>
    );
  }

}

class WorkMain extends Component {
    render() {
        const workData = WorkAPI.getAllWorkItems( workJson );

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
                <div className="work-grid">
                    <WorkList work={workData} />
                </div>
            </div>
        );
    }
}

export default WorkMain;
