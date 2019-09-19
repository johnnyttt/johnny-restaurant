import React from 'react';
// import Button from '@material-ui/core/Button';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';


import Container from '@material-ui/core/Container';



 const Layout =props=>{
    return (
        <React.Fragment>
            <Container maxWidth="mw" style={{ backgroundColor: '#cfe8fc', height: '20vh', textAlign: 'center' }} >
                <Header />
            </Container>
            <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                    <main>{props.children}</main>
            </Container>
            <Container maxWidth="mw" style={{ backgroundColor: '#cfe8fc', height: '20vh', textAlign: 'center' }} >
                <Footer />
            </Container>
        </React.Fragment>
      );
}
export default Layout;