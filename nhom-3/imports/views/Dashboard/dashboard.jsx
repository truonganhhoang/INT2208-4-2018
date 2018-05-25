ximport React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {withStyles, Grid} from "material-ui";
import {
    ChartCard,
    RegularCard,
    ItemGrid,
    StatsCard,
    Topic
} from "../../components";
import "react-vertical-timeline-component/style.min.css";

import {Paper} from "material-ui"
import dashboardStyle from "../../assets/jss/material-dashboard-react/dashboardStyle";
import {AccessTime, ContentCopy, Warning} from "@material-ui/icons/index";

//import data

import {learningProgressData} from "../../variables/charts";
import {topic} from "../../variables/general.jsx"
//
import Loading from "../../views/Loading/loading.jsx"
Loading();
class DashboardPage extends React.Component {

    constructor(){
        super();

    }
    render() {
        return (
            <div>
                <Grid container>
                    <ItemGrid xs={12} sm={6} md={9}>
                        <RegularCard
                            cardTitle="Chủ đề"
                            cardSubtitle="chọn 1 trong các chủ đề bắt đầu bài học"
                            plainCard={true}
                            content={
                                <Paper>
                                    <Grid container justify={"center"} style ={{paddingTop:"1em"}}>
                                        {
                                            topic.map((i,key)=>(
                                                <Topic key={key}
                                                image={i.image}
                                                topic={i.topic}
                                                description={i.description}
                                                numOfWords={Number(i.numOfWords)}
                                                disabled={i.disabled==="1"}
                                                />
                                            ))
                                        }
                                    </Grid>
                                </Paper>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={12} sm={6} md={3}>
                        <StatsCard
                            icon={ContentCopy}
                            iconColor="orange"
                            title="Số từ đã học"
                            description="8"
                            small="Từ"
                            statIcon={Warning}
                            statIconColor="danger"
                            statLink={{text: "tra cứu từ?", href: "/dictionary"}}
                        />
                        <ChartCard
                            chart={
                                <ChartistGraph
                                    className="ct-chart"
                                    data={learningProgressData.data}
                                    type="Line"
                                    options={learningProgressData.options}
                                    listener={learningProgressData.animation}
                                />
                            }
                            chartColor="green"
                            title="Quá trình học trong tuần"
                            statIcon={AccessTime}
                            statText="updated 4 minutes ago"
                        />
                    </ItemGrid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(dashboardStyle)(DashboardPage);
