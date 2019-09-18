import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Logo from '../../components/Logo/Logo';
import Contact from '../../components/Contact/Contact';
import Grid from '@material-ui/core/Grid';

const Footer =()=> {
    return (
        <footer>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Logo />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Navigation />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Contact />
                </Grid>
            </Grid>
        </footer>
    )
}
export default Footer;