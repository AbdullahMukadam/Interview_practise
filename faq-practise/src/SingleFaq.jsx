import React, { useEffect, useState } from 'react'
import "./App.css"

function SingleFaq({ faq, index }) {
    const [ishow, setishow] = useState(false)
    useEffect(() => {
        if (index === 0) {
            setishow(true)
        }
    }, [])

    const handleDown = () => {
        setishow(true)
        if (ishow) {
            setishow((prev) => !prev)
        }

    }


    return (
        <div className='faq-card'>
            <div className='inner' onClick={handleDown}>
                <button className={ishow ? "up" : ""}>↓</button>
                <h2>{faq.question}</h2>
            </div>

            {ishow && <p>{faq.answer}</p>}
        </div>
    )
}

export default SingleFaq