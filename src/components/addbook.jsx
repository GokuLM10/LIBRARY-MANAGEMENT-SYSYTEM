import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addbook.css'

const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl

    let [title,setTitle] = useState("")
    let [authors,setAuthors] = useState("")
    let [categories,setCategory] = useState("")
    let [pageCount,setPage] =useState("")
    let [shortDescription,setShort] = useState("")
    let [longDescription,setLong] = useState("")
    let [thumbnailUrl,setUrl] = useState("")

    let navigate = useNavigate()

    let handleSubmit= (e) =>{
        e.preventDefault();
        let bookData = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to server
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json' },
            body : JSON.stringify(bookData)
        })
          alert('book added successfully')
          navigate('/admin/booklist')
    }

    return (
        <div className="addbook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input required value={title} on onChange={(e)=>setTitle(e.target.value)}  type="text" placeholder="Title of the book" />
                    </div>
                    <div className="authors">
                    <input required value={authors} on onChange={(e)=>setAuthors(e.target.value)}  type="text" placeholder="Author of the book" />
                    </div>
                    <div className="categories">
                    <input required value={categories} on onChange={(e)=>setCategory(e.target.value)}  type="text" placeholder="Category of the book" />
                    </div>
                    <div className="pageCount">
                    <input required value={pageCount} on onChange={(e)=>setPage(e.target.value)}  type="number" placeholder="Page count of the book" />
                    </div>
                    <div className="shortDescription">
                        <textarea required value={shortDescription} on onChange={(e)=>setShort(e.target.value)}  name="" id="" placeholder="Short description of the book" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                    <textarea required value={longDescription} on onChange={(e)=>setLong(e.target.value)}  name="" id=""  placeholder="Long description of the book" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                    <input required value={thumbnailUrl} on onChange={(e)=>setUrl(e.target.value)}  type="text" placeholder="ThumbnailUrl of the book" />
                    </div>
                    <button id="btn_book">Add book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;