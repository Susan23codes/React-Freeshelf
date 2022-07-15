import { useState } from "react"



export default function Book(props) {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            <div className="book_card">
                <h2>{props.book.title}</h2>
                <p>by {props.book.author}</p>
                <p>{props.book.shortDescription}</p>
                <img className="cover_art"
                    src={props.book.coverImageUrl ? props.book.coverImageUrl : "default_book_cover.jpeg"} alt="" /> <br />
                <button  onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Show Less' : 'Show More'}
                </button>
                {expanded ? (
                    <>
                        <p>URL: <a href={props.book.url}>Link to the book</a></p>
                        <p>Publisher: {props.book.publisher ? props.book.publisher : 'No data available'}</p>
                        <p>Publication Date: {props.book.publicationDate ? props.book.publicationDate : 'No data available'}</p>
                        <p>Detailed Description: {props.book.detailedDescription}</p>
                    </>
                ) : (
                    ''
                )}
            </div>
        </>
    )
}




