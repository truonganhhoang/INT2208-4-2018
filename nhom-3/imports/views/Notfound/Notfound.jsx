import React from 'react';
// core components
import {Quote,P,small,RegularCard} from "../../components/index.js";
import {Card,CardContent} from "material-ui";


function Notfound({...props}) {

    return (
        <Card>

              <CardContent>
              <h1 align = "center">
                  404- Not found<br/>
                  <small>Actually, it is maybe under development</small>
              </h1>
              < Quote
              text="When I was in school, working as a team was called cheating."
              author="Peter Norvig"
              />

              </CardContent>
        </Card>
    );
}

export default Notfound;
// "When I was in school, working as a team was called cheating." - Peter Norvig