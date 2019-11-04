class Admin {
  static GetMediaData(){
    axios.get( '/api/MediaData' ).then( function ( aData ) {
      let lTable = $( '#media-datatable' ).DataTable({
        data: aData.data,
        searching: true,
        filtering: true,
        orderCellsTop: true,
        fixedHeader: true,
        searchable: true,
        select: {
          style: 'multi'
        },
        multiselect: true,
        responsive: true,
        ordering: true,
        pagingType: "simple_numbers",
        columns: [
          {
            title: 'Name',
            data: null,
            render: function( data ){
              return data.name;
            }
          },
          {
            title: 'Artist',
            data: null,
            render: function( data ){
              return data.artist;
            }
          },
          {
            title: 'Album',
            data: null,
            render: function( data ){
              return data.album;
            }
          }
        ]
      });
    }).catch( function( aError ) {
      console.log( aError );
    });
  }

  static DeleteMediaEntry(){
    axios.delete( '/api/MediaData' ).then( function( aData ){
      this.GetMediaData();
    }).catch( function( aError ){
        console.log( aError );
    });
  }
}
