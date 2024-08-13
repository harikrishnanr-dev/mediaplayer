import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/AllApi'
import { Col, Row } from 'react-bootstrap'

function View(uploadVideoStatus) {
  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const response = await getAllVideos();
      console.log("===All videos===")
      console.log(response);
    const { data } = response;
    setAllVideos(data)
  }
  useEffect(() => {
    getVideos()
  },[uploadVideoStatus])
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos.map((videos) => (
              <Col key={videos.id} sm={8} md={5} lg={4}>
                <VideoCard displayVideo = {videos} />
              </Col>
             )) :
            <p> Nothing To Display</p>
        }
      </Row>

    </>
  )
}

export default View