import React from 'react'

interface props{
    message: string
}

const WarningCard = ({ message }: props) => {
    return (
        <div style={{ 
            border: '1px solid red', 
            backgroundColor: '#fff3cd', 
            color: 'red', 
            padding: '10px', 
            borderRadius: '5px',
            width: '100%',
            margin: '10px 0',
            textAlign: 'left'
        }}>
            {message}
        </div>
    )
}

export default WarningCard