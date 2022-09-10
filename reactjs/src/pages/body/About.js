import React from 'react'

function About() {
    return (
        Array.isArray(product) && product.lenth> 0 ? 
        <div key={product.id}>
            <div>{product.name}</div>
        </div>
        : null
    )
}

export default About;