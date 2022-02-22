import React from "react";
import { BrowserRouter, HashRouter, MemoryRouter, Routes,Route, Link } from "react-router-dom";
import  StreamCreate  from './streams/StreamCreate';
import  StreamList  from './streams/StreamList';
import  StreamEdit from './streams/StreamEdit';
import  StreamShow  from './streams/StreamShow';
import  StreamDelete  from './streams/StreamDelete';
import Header from "./Header";



export const App = () => {
    return (
        <div>
            
            <BrowserRouter>
            <Header/>
            <Routes>
            <Route path="/" exact element={ <StreamList />} />
            <Route path="/stream/new" exact element={ <StreamCreate />} />
            <Route path="/stream/edit" exact element={ <StreamEdit />} />
            <Route path="/stream/show" exact element={ <StreamShow />} />
            <Route path="/stream/delete" exact element={ <StreamDelete />} />
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}