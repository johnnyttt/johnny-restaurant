import React from 'react';
// import Button from '@material-ui/core/Button';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import RestRating from '../../components/RestRating/RestRating';


import Container from '@material-ui/core/Container';



 const Layout =()=>{
    return (
        <React.Fragment>
            <Container maxWidth="mw" style={{ backgroundColor: '#cfe8fc', height: '20vh', textAlign: 'center' }} >
                <Header />
            </Container>
            <Container maxWidth="lg" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                <RestRating />
            </Container>
            <Container maxWidth="mw" style={{ backgroundColor: '#cfe8fc', height: '20vh', textAlign: 'center' }} >
                <Footer />
            </Container>
        </React.Fragment>
      );
}
export default Layout;