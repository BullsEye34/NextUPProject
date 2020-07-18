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
    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 500px, rgba(0, 0, 0, 0.07) 0px 1px 500px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
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
            justify="center">
            <Grid item xs={9}>
              <Card className={classes.root} >
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
