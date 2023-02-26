import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/global';

function Videos() {
    const {videos} = useGlobalContext()

    return (
        <VideosStyled>
            <div className="videos-container">
                {videos.map((video) => {
                    return <Link key={video._id} to={`/videos/${video._id}`}>
                        <div  className="video">
                            <video src={video.videoUrl}></video>
                            <h4>{video.title}</h4>
                            <p>{video.description}</p>
                        </div>
                    </Link>
                })}
            </div>
        </VideosStyled>
    )
}

const VideosStyled = styled.div`
    .videos-container{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1.5rem;
        padding-top: 3rem;
        transition: all .4s ease;
        opacity: 0;
        animation: fade-in .5s ease-in-out forwards;
        @keyframes fade-in {
            0%{
                opacity: 0;
                transform: scale(0);
            }
            100%{
                opacity: 1;
                transform: scale(1);
            }
        }
        .video{
            transition: all .4s ease;
            width: 100%;
            cursor: pointer;
            border-radius: 15px;
            video{
                width: 100%;
                height: auto;
                object-fit: cover;
                border-radius: 15px;
            }
            h4{
                color: #32ffce;
                padding: .5rem 0;
                font-size: 1.5rem;
                font-weight: 500;
            }
            p{
                color: #fff;
                opacity: 0.8;
                font-size: 1rem;
                line-height: 1.4rem;
            }
        }
    }
`;

export default Videos