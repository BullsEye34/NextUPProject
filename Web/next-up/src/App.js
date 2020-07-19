import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import { TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
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
  var sty;
  console.log(window.innerWidth);
  if (window.innerWidth <= 500) {
    sty = {
      display: 'flex', flexDirection: 'column', justifyContent: 'center'
    };
  } else if (window.innerWidth > 500) {
    sty = {
      display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'
    };
  }
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
        </Typography><br></br>
                  <form>
                    <div style={sty}>
                      <TextField id="outlined-basic" label="No. of Bedrooms" variant="outlined" style={{ margin: 10, }} />
                      <TextField id="outlined-basic" label="No. of Floors" variant="outlined" style={{ margin: 10 }} />
                      <TextField id="outlined-basic" label="No. of Bathrooms" variant="outlined" style={{ margin: 10, }} />
                    </div><br></br>
                    <div style={sty}>
                      <TextField id="outlined-basic" label="Living Sq. Ft." variant="outlined" style={{ margin: 10 }} />
                      <TextField id="outlined-basic" label="Year Built" variant="outlined" style={{ margin: 10 }} />
                    </div><br></br>
                    <div style={sty}>
                      <TextField id="outlined-basic" label="City" variant="outlined" style={{ margin: 10 }} />
                    </div>
                  </form>
                </CardContent>

              </Card>
            </Grid>
          </Grid>

          <img src={back} className="image"></img>
        </div>

      </header>
    </div>
  );
}


export default App;
