import React from 'react'

const size = {
    tablet: 768,
    desktop: 1200
}

export const numberOfElements = (width) => {
    if (width < size.tablet) {
        return Math.floor((width * 0.89) / 87)
    } else if (width < size.desktop) {
        return Math.floor((width * 0.7) / 85)
    } else {
        return Math.floor((width * 0.7) / 90)
    }
}
