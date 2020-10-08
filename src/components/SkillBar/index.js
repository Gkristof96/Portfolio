import React from 'react'
import {FullBar, Realbar, Title, Percent} from './SkillBarElements'

const SkillBar = ({title,percent}) => {
    return (
        <>
            <FullBar>
                    <Realbar percent={percent}>
                        <Title>{title}</Title>
                        <Percent>{percent}</Percent>
                    </Realbar>
            </FullBar>
        </>
    )
}

export default SkillBar