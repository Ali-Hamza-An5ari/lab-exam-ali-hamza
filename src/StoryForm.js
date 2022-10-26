import React, { useRef, useState, useEffect } from 'react'
import { Formik } from 'formik'
import axios from 'axios';

function StoryForm() 
{
   const [searchRecs, setSearchRecs] = useState([""])
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);
    const [q, setQ] = useState("")
    const t = useRef()

    // useEffect( async () => {
    //     await fetch(q)
    //     // await fetch("https://hn.algolia.com/api/v1/search?query=hello&page=0")
    //       .then((res) => res.json())
    //       .then((json) => {
    //         console.log(json);
    //         setData(json.data);
    //         setLoading(false);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         setError(err.message);
    //         setLoading(false);
    //       });
    //   }, []);

    const handle = ()=>
    {
        console.log(t.current.value)
        setSearchRecs(t.current.value)
        console.log(searchRecs)
        setQ("https://hn.algolia.com/api/v1/search?"+t.current.value+"=&page=0")
        fetchAPIData(t.current.value)
        console.log(data)
    }
    function fetchAPIData(url) {
        axios.get("https://hn.algolia.com/api/v1/search?query=hello&page=0").then(
            (response) => {
                setData(response.data)
            }
        );
     }

    // const handleClick = async() => {
    //     const data = await axios.get('api/foo')
    //     setData({
    //         data: data,
    //         loading: false
    //     })
    // }
  return (
    <>
        <h1>My Hacker stories</h1>
        <span>Search: <input ref={t} name="sBox"/> <button onClick={()=>{handle()}}>Submit</button></span>
        {/* {
            data.map((e, index) =>
                 {
                    return  <div key={index}>{e.title}</div>
                })
        } */}
    </>
  )
}

export default StoryForm