import React from 'react';

const Pages = (props) =>{
    console.log('pages', props);
    const changePage = x => {
        props.page.nextPage(loadMore());
        props.page.setSearch({
            query: {term: props.page.searchTerm, location: props.page.location},
            offset: (props.page.page.currentPage + 1) * 10,
            placeData: props.page.places
        });
    }

    const loadMore = () => ({
        currentPage: props.page.page.currentPage + 1,
        previousPage: props.page.page.previousPage + 1,
        nextPage: props.page.page.nextPage + 1,
        range: [props.page.page.range[0] + 1, props.page.page.range[1] + 1]
    })

    return (
        <div id = 'pages'>
            <input type='button' onClick={() => (changePage('next'))} value='Load More'/>
        </div>
      );
  }
  
  export default Pages