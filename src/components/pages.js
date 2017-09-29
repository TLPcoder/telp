import React from 'react';

const Pages = (props) =>{
    console.log('pages', props);
    const changePage = x => {
        if(x === 'next'){
            props.page.nextPage(next());
            props.page.setSearch({
                query: {term: props.page.searchTerm, location: props.page.location},
                offset: (props.page.page.currentPage + 1) * 10,
                placeData: props.page.places
            });
        }else if(x === 'prev'){
            props.page.previousPage(previous())
            props.page.back({
                photoIds: Object.assign({}, {data: props.page.places.slice(0, props.page.places.length - 20)}),
                searchTerm: props.page.searchTerm
            });
        }
        // else {
        //     props.page.toPage(toPage(x))
        //     props.page.setSearch({
        //         query: props.page.searchTerm,
        //         offset: x * 10,
        //         placeData: props.page.places
        //     });
        // }
    }
    // const create = () => {
    //     let page = []
    //     console.log('start end', props.page.page.range);
    //     for(let i = props.page.page.range[0]; i <= props.page.page.range[1]; i++){
    //         const className = props.page.page.currentPage === i ? 'currentPage' : 'notCurrentPage';
    //         page.push(<p className = {className} onClick={() => (changePage(i))}>{i}</p>);
    //     }
    //     return page
    // }

    // const getRange = (page) => {
    //     return page < 6 ? [1, 10] : [page - 5, page + 4]
    // }

    // const toPage = (page) => ({
    //     currentPage: page,
    //     previousPage: page - 1,
    //     nextPage: page + 1,
    //     range: getRange(page)
    // })

    const next = () => ({
        currentPage: props.page.page.currentPage + 1,
        previousPage: props.page.page.previousPage + 1,
        nextPage: props.page.page.nextPage + 1,
        range: [props.page.page.range[0] + 1, props.page.page.range[1] + 1]
    })
    
    const previous = () => ({
        currentPage: props.page.page.currentPage - 1,
        previousPage: props.page.page.previousPage - 1,
        nextPage: props.page.page.nextPage - 1,
        range: [props.page.page.range[0] - 1, props.page.page.range[1] - 1]
    })

    return (
        <div id = 'pages'>
            <p onClick={() => (changePage('prev'))}>Load Less</p>
            <p onClick={() => (changePage('next'))}>Load More</p>
        </div>
      );
  }
  
  export default Pages