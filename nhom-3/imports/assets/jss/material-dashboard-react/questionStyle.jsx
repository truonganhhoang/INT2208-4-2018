import {blue, createMuiTheme, green, red} from "material-ui";
const styles = theme => ({

    root: {

        flexGrow: 1,
    },
    header: {
        display: "flex",
        alignItems: "center",
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        marginBottom: 20,
        marginTop: "1em",
        backgroundColor: theme.palette.background.default,
    },
    content: {
        height: "67vh",
        overflow: "hidden",
        width: "100%",
    },
    image: {
        maxHeight: "30em",
        maxWidth: "30em",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        display: "table-cell",
        verticalAlign: "middle"
    },
    card: {
        marginTop: "3em",
        margin: "auto",
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: "80%", // 16:9
    },
    answer: {
        maxWidth: "60em",
        margin: "auto",
        marginTop: "3em"
    },
});
const btnColor = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green
    },
});
module.exports =
{
    styles,
    btnColor
};
