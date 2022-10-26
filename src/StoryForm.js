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
    const [spinner, setSpinner] = useState(false);
    const t = useRef()
    var historyArr = []

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
        historyArr.push(t.current.value)
        // console.log(searchRecs)
        setQ("https://hn.algolia.com/api/v1/search?"+t.current.value+"=&page=0")
        console.log(q)
        const url = "https://hn.algolia.com/api/v1/search?query=hello&page=0"
        // const url = "https://hn.algolia.com/api/v1/search?"+t.current.value+"=&page=0"
        fetchAPIData(url)
        
        
    }
    async function  fetchAPIData(url) {
        // await axios.get(url).then( res => this.setData(res.data)).then(function(res) {
        //       alert();
        //     })
        //     .catch(function(error) {
        //       console.log(error);
        //     });;

        axios.get(url).then(
            (response) => {
                setData(response.data.results)
                setSpinner(false)
            }
        )
        .then(function(response) {
          //alert();
          setSpinner(true);
        })
        .catch(function(error) {
          console.log(error);
        });;
        console.log(url)
        console.log(data)
     }

  return (
    <>
        <h1>My Hacker stories</h1>
        <span>Search: <input ref={t} name="sBox"/> <button onClick={()=>{handle()}}>Submit</button></span>
        {spinner && (
        <p>Data is loading</p>
        )}
        {/* {
            data.map((e, index) =>
                 {
                    return  <div key={index}>{e.title}</div>
                })
        } */}
             {/* {
                return historyArr.map(function(a, index)
                    {
                        return( <span key={index}>
                            <button value={a}></button>
                        </span>)
                    })
            } */}

        return historyArr.map((b,ind)  
        {
            <div key={ind}>
                <button>b</button>
            </div>
        })
           
    </>
  )
}

export default StoryForm