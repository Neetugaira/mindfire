import React, { useState, useEffect } from 'react'
import request from '../../utils/request';

function Search({searchData,setSearchData}) {
  return(<>
    <button>
       <img src="/static/images/search.svg" />
    </button>
    <input type="text" onChange={(event)=>setSearchData(event.target.value)} name="search" className="form-control" placeholder="Search" /></>)
}

export default Search
