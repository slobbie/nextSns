import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {Menu, Input, Row, Col} from 'antd'

import UserProfile from '../components/userProfile'
import LoginForm from '../components/LoginForm'

import styled from 'styled-components'


const AppLayout = ({ children }) => {
  const [ isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
       <Menu mode='horizontal'>
        <Menu.Item>
          <Link href="/"><a>홈</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton/>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
       </Menu>
       <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
         {children}
        </Col> 
        <Col xs={24} md={6}>
          <a href='/' target="_blank" rel="noreferrer noopener">Slobbie</a>
        </Col>
       </Row>
     
    </div>
  )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout



const SearchInput = styled(Input.Search)`
  vertical-align: 'middle';
`