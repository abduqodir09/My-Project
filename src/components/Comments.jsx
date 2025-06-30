import React from 'react'
import './Comments.css'

export default function Comments() {
    let comment = [
        {
            id: 1,
            p: "Carlo Per",
            text: "This web site is very very good and comfortable. I like web site and this car"
        },
        {
            id: 2,
            p: "Robert Carlo",
            text: "This web site is very very good and easy and very new"
        },
        {
            id: 3,
            p: "Uil Frank",
            text: "This web site is very very good and easy and very new and had very new car"
        },
        {
            id: 4,
            p: "John Lakam",
            text: "This web site is very very good. And This web site is nice 👍👍👍👍👍"
        },
        {
            id: 5,
            p: "Jack Ahead",
            text: "This web site is very very good and easy and very new and had very new car and very very nice 👌👌👌👌"
        },
        {
            id: 6,
            p: "Johnson Drank",
            text: "This web site is very very good I like this cars this cars is very new and comfortabe only this cars is very expensive"
        },
        {
            id: 7,
            p: "Kathryn Murphy",
            text: "This web site is very very good and easy and very new and had very new car"
        },
        {
            id: 8,
            p: "Arthur Carl",
            text: "This web site is very easy and I bought BMW"
        },
        {
            id: 9,
            p: "Colinh Anglis",
            text: "This web site is very cheap and I bought Mersedes"
        },
        {
            id: 10,
            p: "Denis Robert",
            text: "This web site is very good And I bought car"
        },
        {
            id: 11,
            p: "Cristiano Ronaldo",
            text: "This web site is very good. I bought bugatti chiron Siuuuuuu"
        },
        {
            id: 12,
            p: "Arthur Evil",
            text: "This web site is very nice 👍👍👍👍👌👌⭐"
        },
        {
            id: 13,
            p: "Cristiano Leva",
            text: "This web site is very good and very nice"
        },
        {
            id: 14,
            p: "Denis Murth",
            text: "This web site is very good and I like this web site design"
        },
        {
            id: 15,
            p: "Anna Lisa",
            text: "This cars is new only good "
        },
    ]
  return (
    <div>
        <div>
            <h1 className='com-h1'>Comments</h1>
            <p className='com-p'>Our customer comments</p>
            <div className='com-w'>
                {
                  comment.map((com)=>{
                    return(
                        <div className='com-w-div'>
                            <h4 className='com-w-h4'>{com.p}</h4>
                            <p className='com-w-p'>⭐⭐⭐⭐⭐</p>
                            <p className='com-w-p-1'>{com.text}</p>
                        </div>
                    )
                  })  
                }
            </div>
        </div>
        <br /><br />
    </div>
  )
}
