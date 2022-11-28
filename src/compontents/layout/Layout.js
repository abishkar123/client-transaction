import React, { Children } from 'react'
import { Container } from 'react-bootstrap'
import { Header } from '../Header'

export const Layout = ({Children}) => {
  return (
    <div className=' '>
        <Header/>
<Container className='mt-5' style ={{minHeight:"73vh"}}>
{Children}
</Container>
        
        <footer className=' text-center bg-dark text-light p-5 mt-5'>
        @aishkar rai 
        </footer>
    </div>
  )
}
