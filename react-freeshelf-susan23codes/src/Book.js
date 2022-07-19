import { useState } from "react"
import { ChevronDownIcon, ChevronRightIcon } from '@primer/octicons-react'
import styled from 'styled-components'
import useMeasure from 'react-use-measure'
import {useSpring, animated} from 'react-spring' 



export default function Book(props) {
    const [expanded, setExpanded] = useState(false)

    const BookContent = styled(animated.div)`
        overflow: hidden;`

    const [ref, bounds] = useMeasure()

    const bookContentAnimatedStyle = useSpring({
            height: expanded ? bounds.height : 0,
          })

    const BookContentInner = styled.div``

    return (
        <>
            <div className="book_card">
                <div className="book_card_info">
                    <h2 className="book_title">{props.book.title}</h2>
                    <p className="author">by {props.book.author}</p>
                    <p className="short_description"><strong>Short Description: </strong>
                        {props.book.shortDescription}</p>
                    {/* <button className="button is-info is-outlined" type="button" aria-expanded=
                        {expanded} aria-controls="id_long_desc" onClick=
                        {() => setExpanded(!expanded)}>
                        {expanded ? 'Show Less' : 'Show More'}
                    </button> */}
                    {expanded ? (
                        <div
                            className="disclosure-control"
                            role="button"
                            aria-expanded={expanded}
                            onClick={() => setExpanded(!expanded)}
                        >
                            <ChevronDownIcon size={24} aria-label="Show less" />
                            <span>Show less</span>
                        </div>
                    ) : (
                        <div
                            className="disclosure-control"
                            role="button"
                            aria-expanded={expanded}
                            onClick={() => setExpanded(!expanded)}
                        >
                            <ChevronRightIcon size={24} aria-label="Show more" />
                            <span>Show more</span>
                        </div>
                    )}
                    <BookContent style={bookContentAnimatedStyle}>
                        <BookContentInner ref={ref}>
                            <p className="url"><strong>URL:</strong> <a href={
                                props.book.url}>Link to the book</a></p>
                            <p><strong>Publisher:</strong> {
                                props.book.publisher ? props.book.publisher : 'No data available'}</p>
                            <p><strong>Publication Date:</strong> {
                                props.book.publicationDate ? props.book.publicationDate : 'No data available'}</p>
                            <p><strong>Detailed Description:</strong> {
                                props.book.detailedDescription}</p>
                        </BookContentInner>
                    </BookContent>
                </div>
                <div>
                    {/* <img className="cover_art"
                        src={props.book.coverImageUrl ? props.book.coverImageUrl :
                            "default_book_cover.jpeg"} alt="Book cover" /> <br /> */}
                    <img className="cover_art"
                        src={props.book.coverImageUrl}
                        onError={(e) => e.target.src = "default_book_cover.jpeg"} alt="Book cover" /> <br />
                </div>
            </div>
        </>
    )
}




