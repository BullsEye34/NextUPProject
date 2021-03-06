import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import back from './assets/house.png';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';



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
    const [predict, setPredict] = React.useState('');

    function getUser() {

        fetch(`http://127.0.0.1:5000/predict`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log(json);
                setPredict(json.prediction)
            });
    };
    getUser();
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

                    <Grid container spacing={3}
                        justify="center" style={{ zIndex: 1, }}>
                        <Grid item xs={9}>
                            <Typography variant="h2" component="h2" style={{ color: "grey" }}>
                                House Price Detection
    </Typography>
                            <br></br>
                            <Card className={classes.root} >
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Well, based on Whatever you've given us.... <br></br>We think that your dream property might cost you around<br></br><br></br></Typography>
                                    <Typography style={{ fontSize: 50 }} color="textSecondary" gutterBottom>₹ {predict.toString().substring(1, 10)}<br></br><br></br></Typography>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>You can click on the button below, so that we can get you in touch with one of our agents.
    </Typography><br></br>
                                    <br></br>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ backgroundColor: "#681AFF", color: 'white', fontSize: 20, width: (window.innerWidth / 4) }}
                                        disableElevation>
                                        Real Estate Agent</Button>
                                </CardContent>

                            </Card><br></br>
                        </Grid>
                    </Grid>

                    <img src={back} className="image"></img>
                </div>

            </header>
        </div>
    );
}


export default Result;
