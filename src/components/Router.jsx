import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import Post from '../pages/Post/index';
import DefaultLayout from '../layouts/DefaultLayout/index';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<Post />} />
            </Route>
        </Routes>
    );
};

export default Router;
