import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import CardLink from './CardLink';
import { DataContext } from '../context/DataContenxt';

const Profile = (props) => {
    const { data } = useContext(DataContext)
    console.log(data, 'data del context');


    useEffect(() => {
        enviarDatos()
    }, [])

    // enviar datos al app
    const enviarDatos = () => {
        props.handleData(data)
    }


    return (
        <ProfileContent
            color={data.background}>
            <div className="content">
                <div className="avatar">
                    <img src={data.avatar} alt="" />
                </div>
                <div className="namePorfile">
                    <h2> {data.name} </h2>
                    <h3>@{data.username}</h3>
                </div>
                <div className="links">
                    {
                        data.links.map((link, key) => (
                            <CardLink data={link} key={key}>
                            </CardLink>
                        ))
                    }
                </div>
            </div>
        </ProfileContent>
    )
}

const ProfileContent = styled.div `
    background-color: ${props =>  props.color ? props.color : 'red'};
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
        .avatar {
            padding-top: 2em;
            width: 90px;
            height: 90px;
            img {
                width: inherit;
                height: inherit;
                border-radius: 50px;
                object-fit: cover;
            }
        }
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
export default Profile