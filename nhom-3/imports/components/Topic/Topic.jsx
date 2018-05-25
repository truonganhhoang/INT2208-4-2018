import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "material-ui/styles";

import Card, {CardMedia, CardContent, CardActions} from "material-ui/Card";
import IconButton from "../../components/CustomButtons/IconButton.jsx"
import Typography from "material-ui/Typography";
import Tooltip from "material-ui/Tooltip";

import Badge from "material-ui/Badge";
import Assignment from "@material-ui/icons/Assignment";
import LightbulbOutline from "@material-ui/icons/LightbulbOutline";
import Lock from "@material-ui/icons/Lock"

import ItemGrid from "../../components/Grid/ItemGrid.jsx";
import Devider from "material-ui/Divider"

import Grow from "material-ui/transitions/Grow";

//TODO bad design
import Learn from "../../views/Learning/Learning"

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    actions: {
        display: "flex",
    },

});

class Topic extends React.Component {
    render() {
        const {
            classes,
            image,
            topic,
            description,
            numOfWords,
            disabled
        } = this.props;

        return (
            <Grow in>
                <ItemGrid lg={3} xs={12}>
                    <Card elevation={disabled ? 1 : 2} style={{marginBottom: "6%"}}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title={topic}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                {topic}
                            </Typography>
                            <Typography variant="caption" gutterBottom align="center">
                                {description}
                            </Typography>
                            <Devider/>

                        </CardContent>
                        <CardActions className={classes.actions} disableActionSpacing>

                            <Tooltip id="tooltip-fab" title="số từ">
                                <Badge className={classes.margin} badgeContent={numOfWords} color="primary">
                                    <Assignment/>
                                </Badge>
                            </Tooltip>
                            {disabled ?
                                <Tooltip id="tooltip-fab" title="Chủ đề này chưa hỗ trợ hoặc bạn phải hoàn thành khóa học trước đó.">
                                    <IconButton><Lock
                                        style={{color: "#000000"}}/></IconButton>
                                </Tooltip> :
                                <Tooltip id="tooltip-fab" title="Bắt đầu học">
                                    <IconButton color="primary"><LightbulbOutline
                                        onClick={() => {
                                            Learn(topic)
                                        }}
                                        style={{color: "#FFFFFF"}}/></IconButton>
                                </Tooltip>
                            }
                        </CardActions>

                    </Card>
                </ItemGrid>
            </Grow>
        );
    }
}

Topic.propTypes = {
    classes: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numOfWords: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
};

export default withStyles(styles)(Topic);
