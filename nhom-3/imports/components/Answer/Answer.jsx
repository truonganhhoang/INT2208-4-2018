import React from "react";
import {withStyles, Button, Grid, Typography} from "material-ui";
import PropTypes from "prop-types";
import Radio from 'material-ui/Radio';
import Paper from "material-ui/Paper";


let color = "#fff"
const styles = theme => ({
        paper: {
            height: '4vh',
            width: '4vw',
        }
});

function Answer() {

    return (
        <Grid item xs={4} >
            <Paper style={{
                height: '13vh',
            }} >
                <Typography variant="body2" align="center">
                    Body 2
                </Typography>
            </Paper>
        </Grid>
    );
}
export default withStyles(styles)(Answer);