import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Dropdown from './Dropdown';
import Popup from './Popup';
import Formfiled from './Formfiled';

import styled from 'styled-components';
import Interactive from './Interactive';
import ColorTextGuilde from './ColorTextGuilde';

const Router = () => {
  return (
    <>
      <NavList>
        <NavLink to='/colortextguide'>ColorTextGuide</NavLink>
        <NavLink to='/formfiled'>Form filed</NavLink>
        <NavLink to='/dropdown'>Dropdown</NavLink>
        <NavLink to='/popup'>Popup</NavLink>
        <NavLink to='/interactive'>Interactive</NavLink>
      </NavList>
      <Routes>
        <Route path='/formfiled' element={<Formfiled />}></Route>
        <Route path='/dropdown' element={<Dropdown />}></Route>
        <Route path='/popup' element={<Popup />}></Route>
        <Route path='/interactive' element={<Interactive />}></Route>
        <Route path='/colortextguide' element={<ColorTextGuilde />}></Route>
      </Routes>
    </>
  );
};

export default Router;

const NavList = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  a {
    min-width: 100px;
    text-align: center;
  }
`;
