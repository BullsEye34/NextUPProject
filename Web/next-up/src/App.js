import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import back from './assets/mainBackground.png';
import Grid from '@material-ui/core/Grid';

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
function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
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
                    Hi, Welcome to our new Project. Please, enter your preferences, so that we can help you find the best suggestion for you!
        </Typography>

                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <img src={back} className="image"></img>

          {/* <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
        </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
        </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
          <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card> */}
        </div>

      </header>
    </div>
  );
}


export default App;
