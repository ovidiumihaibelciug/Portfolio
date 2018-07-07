import React from 'react'

const Info = ({ data }) => {
    return (
        <div>
            <div className="title">About me.</div>
            <div className="description">
                {
                    data.map(item => {
                        return (<p>{item} </p>)
                    })
                }
            </div>
        </div>
    )
}

export default Info
