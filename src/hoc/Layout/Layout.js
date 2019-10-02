import React from 'react';
// import Button from '@material-ui/core/Button';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';


import Container from '@material-ui/core/Container';



 const Layout =props=>{
    return (
        <React.Fragment>
            <Container maxWidth="xl" style={{ backgroundColor: '#cfe8fc', height: '10vh', textAlign: 'center' }} >
                <Header />
            </Container>
            <Container maxWidth="xl" style={{ backgroundColor: '#cfe8fc', }} >
                    <main>{props.children}</main>
            </Container>
            <Container maxWidth="xl" style={{ backgroundColor: '#cfe8fc', height: '20vh', textAlign: 'center', marginTop:'20px' }} >
                <Footer />
            </Container>
        </React.Fragment>
      );
}
export default Layout;