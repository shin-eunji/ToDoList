import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Photo from "./Photo";

function Contents (props) {

    const {} = props;

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get('https://api.unsplash.com/photos/?client_id=t_jbP7JejOj1keyZ7UiEl1BZcoPHG3vxmy3rPUGhVRc').then(res => {
            const result = res.data
            setPhoto(result)
        })
    }, [])

    return (
        <Container>
            <PhotoContainer>
                {
                    photo.map((item, index) => {
                        return <Photo key={index} item={item} />
                    })
                }
            </PhotoContainer>
        </Container>
    )
}

const Container = styled.div`
  position:relative;
  top: 150px;
  width: 1200px;
  display:flex;
  justify-content:center;
  flex-wrap: wrap;
`
const PhotoContainer = styled.div`
    
`;
export default Contents;