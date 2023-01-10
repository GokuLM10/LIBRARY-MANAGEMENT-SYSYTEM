import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/readBook.css'

const ReadBook = () => {
    let [books,setBooks] = useState([])
    // to get route parameter
    let params = useParams()

    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`)
            let data = await response.json()
            setBooks(data)
        }
        fetchdata()
    },[books])


    return (
        <div className="readbook">
            <div className="readcard">
                <h2>{books.title}</h2>
                <div className="card_footer">
                    <p>{books.shortDescription}</p>
                    <p>{books.longDescription}</p>
                </div>
            </div>
        
        </div>
    );
}

export default ReadBook;