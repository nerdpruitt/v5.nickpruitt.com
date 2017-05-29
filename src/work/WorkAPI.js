const WorkAPI = {
    getWorkItem: function( id, data ) {
        const item = data.filter( (item) => {
            return item.id === parseInt(id, 10);
        } );

        return item[0];
    }
}

export default WorkAPI;