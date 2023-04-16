import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dropdown from './Dropdown';
import Modal from './Modal';
import Formfiled from './Formfiled';

import styled from 'styled-components';

import ColorTextGuilde from './ColorTextGuilde';
import IconGuide from './IconGuide';
import ComponentGuide from './ComponentGuide';

const Router = () => {
  return (
    <>
      <NavList>
        <h1>Baronote Style FrameWork</h1>
        <div className='list'>
          <NavLink to='/'>ColorTextGuide</NavLink>
          <NavLink to='/formfiled'>Form filed</NavLink>
          <NavLink to='/dropdown'>Dropdown</NavLink>
          <NavLink to='/modal'>Modal</NavLink>
          <NavLink to='/iconguide'>IconGuide</NavLink>
          <NavLink to='/ComponentGuide'>Npm-ComponentGuide</NavLink>
        </div>
      </NavList>
      <Routes>
        <Route path='/' element={<ColorTextGuilde />}></Route>
        <Route path='/formfiled' element={<Formfiled />}></Route>
        <Route path='/dropdown' element={<Dropdown />}></Route>
        <Route path='/modal' element={<Modal />}></Route>
        <Route path='/ComponentGuide' element={<ComponentGuide />}></Route>
        <Route path='/iconguide' element={<IconGuide />}></Route>
      </Routes>
    </>
  );
};

export default Router;

const NavList = styled.div`
  padding: 30px 0;
  min-height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  h1 {
    font-weight: bold;
    font-size: 50px;
    line-height: 70px;
  }
  a {
    display: block;
    min-width: 100px;
    text-align: center;
  }
  .list {
    display: flex;
    margin-top: 30px;
  }
`;
