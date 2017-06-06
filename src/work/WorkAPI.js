const WorkAPI = {
    getAllWorkItems: function( json ) {
        const map = new Map( Object.entries ( json ) );
        const arr = [];

        for ( let value of map.values() ) {
            arr.push( value );
        }

        return arr;
    },
    getWorkItem: function( id, data ) {
        const item = data.filter( ( item ) => item.id === parseInt( id, 10 ) );

        return item[0];
    }
}

export default WorkAPI;
