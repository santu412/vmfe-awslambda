import React from 'react';
import MarketingApp from './components/MarketingApp';
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider, createGenerateClassName } from  '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import  Header  from './components/Header';

const generateClassName=  createGenerateClassName({
  productionPrefix: 'co'
});


export default () => {
  
    const classes = makeStyles((theme) => ({
        headercontainer: {
            backgroundColor: "red",
            paddingRight: "20em",
            paddingLeft: "118px",
          },
    }));

    const displayDesktop = () => {
      return <Toolbar > 
      <div>VM --- CONTAINER PAGE FOR ALL THE APPS.</div>
      </Toolbar>;
    };

    return (
        <>
        <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header/>
        <MarketingApp/>
        {/* <AppBar className={classes.headercontainer}>{displayDesktop()}</AppBar> */}
      
        </div>
        </StylesProvider>
        </BrowserRouter>
       
      </>
);
};