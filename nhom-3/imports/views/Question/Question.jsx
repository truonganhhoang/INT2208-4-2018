import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Answer from '../../../imports/components/Answer/Answer.jsx'

import {dict} from "../../../imports/api/Dictionary.jsx"
import {media} from "../../../imports/variables/general.jsx"
import Card from "material-ui/Card/Card";

import {CardMedia, Grid, Icon,Button} from "material-ui";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

import {question} from "../../variables/general.jsx"

import {styles,btnColor} from "../../assets/jss/material-dashboard-react/questionStyle.jsx"

let numOfRightAns=0;
class Question extends React.Component {
    constructor() {
        super();
    }

    state = {
        activeStep: 0,
        isGotRight: undefined,
        isAnswered:false
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({activeStep});
    };
    submit = event => {

            let checkAnswer = event.currentTarget.getAttribute('data');
            if(checkAnswer === 'T'){
                numOfRightAns++;
            }
            this.setState(prevState => ({
                activeStep: prevState.activeStep,
                isGotRight: checkAnswer === 'T' ,
                isAnswered:true
            }));
        if (this.state.activeStep !== question.length -1) {
            setTimeout(function () {
                this.setState(prevState => ({
                        activeStep: prevState.activeStep + 1,
                        isGotRight: false,
                        isAnswered:false,
                    })
                )
            }.bind(this), 2000);
        }
        else{
            setTimeout(function () {
                this.setState(prevState => ({
                        activeStep: prevState.activeStep,
                        isGotRight: false,
                        isAnswered:false,
                    })
                )
            }.bind(this), 2000);
            setTimeout(function () {
                MySwal.fire({
                    type: 'success',
                    title: 'Bạn đã trả lời đúng ' + numOfRightAns + '/' + question.length,
                    showConfirmButton: false,
                    timer: 2000
                })
            }.bind(this),2000);
        }
    };

    render() {
        const {classes, theme} = this.props;
        const {activeStep} = this.state;

        const maxSteps = question.length;

        return (
            <MuiThemeProvider theme={btnColor}>
                <div className={classes.root}>
                    <Paper square elevation={0} className={classes.header}>
                        <Typography variant="button" gutterBottom>{question[activeStep].question}</Typography>
                    </Paper>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.activeStep}
                        onChangeIndex={this.handleStepChange}
                        enableMouseEvents
                    >

                        {question.map((step, i) => (
                            <div className={classes.content} key={i}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={media + dict.findOne({'en': step.word}).image}
                                    />

                                </Card>
                                {
                                    step.type === 'choice' ?
                                        <Grid container className={classes.answer} spacing={8} align='center'>
                                            <Grid item xs={4}>
                                                <Button variant="raised" disabled = {this.state.isAnswered} color="primary" onClick={this.submit}
                                                        data={step.answer === "1" ? 'T' : 'F'}
                                                        className={classes.button}>
                                                    {step.answer1}
                                                </Button>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button variant="raised" disabled = {this.state.isAnswered} color="primary" onClick={this.submit}
                                                        data={step.answer === "2" ? 'T' : 'F'}
                                                        className={classes.button}>
                                                    {step.answer2}
                                                </Button>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Button variant="raised" disabled = {this.state.isAnswered} color="primary" onClick={this.submit}
                                                        data={step.answer === "3" ? 'T' : 'F'}
                                                        className={classes.button}>
                                                    {step.answer3}
                                                </Button>
                                            </Grid>
                                        </Grid> : <div>
                                            <Answer/>
                                        </div>
                                }
                            </div>
                        ))}
                    </SwipeableViews>
                    <MobileStepper
                        variant="progress"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        style ={{backgroundColor:this.state.isAnswered?(this.state.isGotRight?'#B1FF95':'#FFCFCC'):'#fff'}}
                        className={classes.mobileStepper}
                        nextButton={
                            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                            </Button>
                        }
                        backButton={
                            <div>
                                {
                                    this.state.isAnswered?
                                    <Icon className={classes.icon} color="primary">
                                        {this.state.isGotRight ? 'done' : 'error'}
                                    </Icon>:undefined
                                }
                            </div>}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Question);