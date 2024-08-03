import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/index';
import BlogPost from '../pages/BlogPost/index';
import DefaultLayout from '../layouts/DefaultLayout/index';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/blogPost/:issueNumber" element={<BlogPost />} />
            </Route>
        </Routes>
    );
};

export default Router;
