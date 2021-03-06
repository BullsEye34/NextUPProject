import React from 'react'
import Card from '@material-ui/core/Card';
import { TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import back from './assets/mainBackground.png';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


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
function Home() {
    var sty;
    var textSty;
    var textSty1;
    var textSty2;
    if (window.innerWidth <= 500) {
        sty = {
            display: 'flex', flexDirection: 'column', justifyContent: 'center'
        };
        textSty = { margin: 10, };
        textSty1 = { margin: 10, };
        textSty2 = { margin: 10, };
    } else if (window.innerWidth > 500) {
        sty = {
            display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'
        };
        textSty = { margin: 10, width: (window.innerWidth / 4) };
        textSty1 = { margin: 10, width: (window.innerWidth / 6) };
        textSty2 = { margin: 10, width: (window.innerWidth / 3) };
    }
    const [age, setAge] = React.useState('');
    const [bhk, setBHK] = React.useState('');
    const [sqft, setSqft] = React.useState('');
    const [yr, setYR] = React.useState('');
    const [floor, setFloor] = React.useState('');
    const [furnishing, setFurnish] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleBHK = (event) => {
        setBHK(event.target.value);
    }; const handleSQFT = (event) => {
        setSqft(event.target.value);
    }; const handleYR = (event) => {
        setYR(event.target.value);
    }; const handleFloor = (event) => {
        setFloor(event.target.value);
    };



    const handleBtn = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ city: age, bhk: bhk, floor: floor, age: yr, sqft: sqft, furnish: furnishing })
        };
        fetch('http://localhost:5000/predict?city=' + age + "&bhk=" + bhk + "&floor=" + floor + "&age=" + yr + "&sqft=" + sqft + "&furnish=" + furnishing, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data)
            );
    };
    const handleChanger = (event) => {

        setFurnish(event.target.value);
    };
    const classes = useStyles();
    return (<header className="background">

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
                                    <FormControl variant="outlined" style={textSty1} className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={age}
                                            onChange={handleChange}
                                            label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'Bommanahalli'}>Bommanahalli</MenuItem>
                                            <MenuItem value={'MG road'}>MG road</MenuItem>
                                            <MenuItem value={'Jayanagar'}>Jayanagar</MenuItem>
                                            <MenuItem value={'Whitefield'}>Whitefield</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField type="number" value={bhk} onChange={handleBHK} id="outlined-basic" label="No. of BHK" variant="outlined" style={textSty1} />
                                    <FormControl variant="outlined" style={textSty1} className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Furnishing</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={furnishing}
                                            onChange={handleChanger}
                                            label="Furnishing"
                                        >

                                            <MenuItem value={true}>Yes</MenuItem>
                                            <MenuItem value={false}>No</MenuItem>

                                        </Select>
                                    </FormControl>
                                </div><br></br>
                                <div style={sty}>
                                    <TextField type="number" value={sqft} onChange={handleSQFT} id="outlined-basic" label="Living Sq. Ft." variant="outlined" style={textSty} />
                                    <TextField type="number" value={yr} onChange={handleYR} id="outlined-basic" label="Year Built" variant="outlined" style={textSty} />
                                </div><br></br>
                                <div style={sty}>
                                    <TextField type="number" value={floor} onChange={handleFloor} id="outlined-basic" label="No. Of Floors" variant="outlined" style={textSty2} />
                                </div>
                                <br></br><br></br>
                                <Link to="/result" bhk={bhk} city={age} floor={floor} age={yr} sqft={sqft} furnish={furnishing} onClick={handleBtn}>
                                    <Button
                                        variant="contained"
                                        color="primary"

                                        style={{ backgroundColor: "#681AFF", color: 'white', fontSize: 20, width: (window.innerWidth / 4) }}
                                        disableElevation
                                    >
                                        SUBMIT</Button>
                                </Link>
                            </form>
                        </CardContent>

                    </Card><br></br>
                </Grid>
            </Grid>

            <img src={back} className="image"></img>
        </div>

    </header >);
}

export default Home;