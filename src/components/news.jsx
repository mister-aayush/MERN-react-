import axios from "axios"
import { useEffect } from "react"

export const news = () =>{

    const url ='https://newsapi.org/v2/everything?q=tesla&from=2025-07-11&sortBy=publishedAt&apiKey=e9d3a5446b924969a5e1996c603478ff'

    const fetchNews = async () => {
        const response = await axios.get(url)
        console.log(response,"response")
    }
    
    useEffect(()=>{
        fetchNews()
    },[])
    return <div>News</div>
}</>