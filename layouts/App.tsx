import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import loadable from '@loadable/component';

const Workspace = loadable(() => import('@layouts/Workspace'));
const Login = loadable(()=>import('@pages/Login')) 
const SignUp = loadable(()=>import('@pages/SignUp')) 
const Channel = loadable(()=>import('@pages/Channel')) 
const DirectMessage = loadable(()=>import('@pages/DirectMessage')) 

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to='/login' /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/workspace/:workspace/*" element={<Workspace />} />
            {/* <Route path="/workspace/:workspace/channel/:channel" element={<Channel />} />
            <Route path="/workspace/:workspace/dm/:id" element={<DirectMessage />} /> */}
        </Routes>
    )
}