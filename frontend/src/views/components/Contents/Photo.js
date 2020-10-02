import React, {useState} from 'react';
import styled from 'styled-components';
import PhotoPopup from "../Popup/PhotoPopup";

function Photo (props) {

    const {
        item
    } = props;

    const [detail, handleDetail] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const openDetail = () => {
        handleDetail(true)
    }

    return (
        <Container>
            <PhotoItem onClick={openDetail}
                       onMouseEnter={() => {
                           setIsShow(true)
                       }}
                       onMouseLeave={() => {
                           setIsShow(false)
                       }}
            >
                <img src={item.urls.small}
                     alt="photo"
                />
            </PhotoItem>
            {
                detail &&
                <PhotoPopup handleDetail={handleDetail} />
            }
            {
                isShow &&
                    <Hover/>
            }
        </Container>
    )
}

const Container = styled.div`
`
const PhotoItem = styled.div`
    position:relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: zoom-in;
`;
const Hover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
`;
export default Photo;