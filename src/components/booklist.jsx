import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/booklist.css'

const BookList = () => {

    let [books, setBooks] = useState([])

    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:4000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchdata()
    },[books])


    let handleDelete = (id, title) => {
       fetch(`http://localhost:4000/books/${id}`,{
        method:'DELETE'
       });
       alert(`${title} will be deleted permanently`)
    }


    let navigate = useNavigate()
    let read =(id)=>{
        navigate(`/admin/booklist/${id}`)
    }

    return (
        <div className="booklist">
            <h1>Book List : {books.length}</h1>
            <div className="book_section">
                {
                    books.map(data => (
                        <div className="books">
                            <div className="book_card">
                                <div className="book_img">
                                    <img height="200" width="200" src={data.thumbnailUrl} alt="" />
                                </div>
                                <div className="books_desc">
                                    <h3>{data.title}</h3>
                                    <h5> <b> Authors:</b> {data.authors}</h5>
                                    <h5> <b> Categories:</b> {data.categories}</h5>
                                    <h5> <b> PageCount: </b>{data.pageCount}</h5>
                                    <button onClick={()=>read(data.id)}>Read more</button>
                                    <button onClick={() => handleDelete(data.id, data.title)}>Delete</button>
                                    
                                </div>


                            </div>
                        </div>
                    ))}
                
            
            </div>
        </div>
    );
}

export default BookList;