import React, { useEffect, useState } from 'react'

const Square = () => {
    const [squares, setSquares] = useState(Array(60).fill(true))
    // console.log("the..", squares);

    useEffect(() => {
        const interval = setInterval(() => {
            setSquares(prevSquares => {
                const blackIndex = prevSquares.findIndex(square => square);

                if (blackIndex === -1) {
                    return Array(60).fill(true);
                }

                return [
                    ...prevSquares.slice(0, blackIndex),
                    false,
                    ...prevSquares.slice(blackIndex + 1),
                ];
            });
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [squares])

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '5px',
        }}>
            {
                squares?.map((isBlack, index) => (
                    <div
                        key={index}
                        style={{
                            height: '100px',
                            width: '100px',
                            border: '1px solid gray',
                            backgroundColor: isBlack ? 'black' : 'white',
                        }}></div>
                ))
            }
        </div>
    )
}

export default Square