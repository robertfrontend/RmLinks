import React from 'react'
import styled from 'styled-components'



const Profile = (props) => {
    console.log(props);
    const links = [
        {
            red: 'instagram',
            icon: true,
            url: 'robertrm0',
        },
        {
            red: 'snapchat',
            icon: true,
            url: 'robertrm0'
        },
        {
            red: 'twitter',
            icon: true,
            url: 'robertrm0'
        },
        {
            red: 'facebook',
            icon: true,
            url: 'robertrm0'
        },
        {
            red: 'pagina web',
            icon: false,
            url: 'robertrm0'
        },

    ]
    return (
        <ProfileContent color={props}>
            <div className="content">
                <div className="namePorfile">
                    <h2>Robert Romero</h2>
                    <h3>@username</h3>
                </div>
                <div className="links">
                    {
                        links.map(link => (
                            <LinkProfile>
                                <div>
                                    {
                                        link.icon ? (
                                            <i className={`fab fa-${link.red}`}  ></i>
                                        ) : (
                                            <i class="fas fa-link"></i>
                                        )
                                    }
                                </div>
                               <div className="nameLink"> {link.red}</div>
                            </LinkProfile>
                        ))
                    }
                </div>
            </div>
        </ProfileContent>
    )
}

const ProfileContent = styled.div `
    background-color: ${props => props.color.color || 'red'};
    width: 100%;
    min-height: 100vh;
    text-align: center;
    .content {
        width: 100%;
        min-height: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        .namePorfile {
            padding: 1em;
            h2 {
                font-size: 200%;
                span {
                    color: #5E17EB;
                }
            }
        }
    }
`

const LinkProfile = styled.a`
    padding: 0.2em 2em;
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
`

export default Profile