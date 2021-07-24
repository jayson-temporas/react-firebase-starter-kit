import * as React from 'react'
import '../css/index.css';
import  Header from './Header'
import  Footer from './Footer'

const Main = ({children, bg}) => {
    return (
        <>
            <Header bg={bg} />
            <div id="main">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Main;
