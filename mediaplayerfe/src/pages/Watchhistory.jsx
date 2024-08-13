import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Watchhistory() {
  return (
    <>
      <div className='container d-flex mt-5 justify-content-between mb-5'>
        <h3 className='textStyle'>Watch History</h3>
        <Link to='/home' style={{textDecoration:'none',color:'white',fontWeight:'750',fontSize:'16px'}}>
          <FontAwesomeIcon icon={faArrowLeft}  className='me-3'/> Back to Home
        </Link>
      </div>
      <table className='table container' data-bs-theme='dark' style={{ borderRadius: '15px',border:'2px'
        }}>
        <thead>
          <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time Stamp</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>neela</td>
            <td>https:///hiudsisiohohvjo</td>
            <td>4455</td>
            <td><FontAwesomeIcon icon={faTrash}/></td>
          </tr>
        </tbody>
      </table>
    </>)
}

export default Watchhistory