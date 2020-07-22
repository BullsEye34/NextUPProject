import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import back from './assets/house.png';



const useStyles = makeStyles({
    root: {
        minHeight: 700,
        zIndex: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 350px, rgba(0, 0, 0, 0.1) 0px 1px 350px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
});
function Result() {

    if (window.innerWidth <= 500) {

    } else if (window.innerWidth > 500) {

    }

    const classes = useStyles();

    return (
        <div className="App">
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                crossorigin="anonymous"
            />
            <header className="background">

                <div className="Background-image">



                    <img src={back} className="image"></img>
                </div>

            </header>
        </div>
    );
}


export default Result;
