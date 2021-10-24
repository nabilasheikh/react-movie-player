import './Typography.css'
import { memo } from 'react'
import PropTypes from 'prop-types'

const Typography = (props)=>{
    const {variant,text} = props 
            return (
                <>
                {variant === 'h2' && <h2 className={'poster-name'}> {text}</h2> }
                {variant === 'h1' && <h1 className={'cards-title'}> {text}</h1> }
                </>
                )
}

Typography.propTypes={
    variant:PropTypes.oneOf('h1','h2'),
    text:PropTypes.string
}

export default memo (Typography);