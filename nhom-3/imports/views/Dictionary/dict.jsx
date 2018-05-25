import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import {media} from "../../../imports/variables/general.jsx";


import {dict} from "../../../imports/api/Dictionary.jsx"
import renderHTML from 'react-render-html';
import ReactAudioPlayer from 'react-audio-player';

let suggestions=[];
let selectedWord = undefined;
Tracker.autorun(()=> {
    let data = dict.find().fetch();
    if(data.length!==0) {
        suggestions=data.map((i) => {
            return {label: i.en};
        });
    }
});


function renderInput(inputProps) {
    const { InputProps, ref, ...other } = inputProps;

    return (
        <TextField
            onChange={(e)=>{selectedWord = e.target.value;console.log(ref)}}
            InputProps={{

                inputRef: ref,

                ...InputProps,
            }}
            {...other}
        />
    );
}

function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(inputValue) {
    let count = 0;

    return suggestions.filter(suggestion => {
        const keep =
            (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
            count < 5;

        if (keep) {
            count += 1;
        }

        return keep;
    });
}



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
});

class IntegrationDownshift extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedWord:undefined
        }
    }
    render() {
        return (
            <div >
                <Downshift onChange={e => {
                    this.setState({selectedWord :dict.findOne({en: e})})
                }}>
                    {({getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex}) => (
                        <div>
                            {renderInput({
                                fullWidth: true,
                                InputProps: getInputProps({
                                    placeholder: 'Nhập từ cần tìm!',
                                    id: 'integration-downshift-simple',
                                }),

                            })}
                            {isOpen ? (
                                <Paper square>
                                    {getSuggestions(inputValue).map((suggestion, index) =>
                                        renderSuggestion({
                                            suggestion,
                                            index,
                                            itemProps: getItemProps({item: suggestion.label}),
                                            highlightedIndex,
                                            selectedItem,
                                        }),
                                    )}
                                </Paper>
                            ) : null}
                        </div>
                    )}
                </Downshift>
                <Paper style={{marginTop: '2vh', padding: '3vh'}}>
                    {
                        this.state.selectedWord === undefined ? undefined :
                        <ReactAudioPlayer
                                src={ media + this.state.selectedWord.sound}
                                autoPlay
                                controls
                                style={{width:'100%'}}
                        />
                    }
                    {this.state.selectedWord === undefined ? undefined : renderHTML(this.state.selectedWord.description)}
                    {this.state.selectedWord === undefined ? undefined : renderHTML(this.state.selectedWord.example)}
                </Paper>
            </div>
        );
    }
}

IntegrationDownshift.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntegrationDownshift);