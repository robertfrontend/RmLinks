import React from 'react'
import styled from 'styled-components'

const CardLink = (props) => {
    const data = props.data

    return (
        <>
            <ContentCardLink>
             <div>
                    {
                        data.icon ? (
                            <i className={`fab fa-${data.red}`}  ></i>
                        ) : (
                            <i className="fas fa-link"></i>
                        )
                    }
             </div>
             <div className="nameLink"> {data.red}</div>
            </ContentCardLink>
        </>
    )
}

const ContentCardLink = styled.a `
    padding: 0.3em 8em;
    font-size: 150%;
    text-align: center;
    margin: 0.4em 0;
    cursor: pointer;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-top: 2px solid rgba(255, 255, 255, 0.205);
    border-bottom: 2px solid rgba(255, 255, 255, 0.205);
    border-radius: 8px;
    i {
        padding: 0 0.3em;
    }
    display: flex;
    flex-direction: row;
    div {
        padding: 0 0.1em;
    }
    .nameLink{
        text-transform: capitalize;
    }

    @media screen and  (max-width: 600px) {
        padding: 0.3em 3em;
    }
`

export default CardLink;
