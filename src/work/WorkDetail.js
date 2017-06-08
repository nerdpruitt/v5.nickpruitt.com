import React, {Component} from 'react';

import workJson from './work.json';
import WorkAPI from './WorkAPI';

class WorkDetail extends Component {
    render() {
        const workData = WorkAPI.getAllWorkItems( workJson );
        const item = WorkAPI.getWorkItem( this.props.match.params.id, workData );

        return (
            <div>
                <div className="default">
                    <div></div>
                    <div className="text">
                        <h1>{item.title}</h1>
                        <div dangerouslySetInnerHTML={ {__html: item.body} } />
                    </div>
                    <div></div>
                </div>
            </div>
        );
    };
}

export default WorkDetail;
