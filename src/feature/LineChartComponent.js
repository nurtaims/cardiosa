import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const styles = {
    card: {
      maxWidth: '100%',
    },
    content: {
      marginLeft: 100,
    }
  };

function LineChartComponent(props) {
    const { classes, data, username } = props
    return(
        <Card className={classes.card}>
            <CardHeader
                title={username}
            />
            <CardContent className={classes.content}>
                <LineChart width={800} height={250} data={data}>
                    <CartesianGrid strokeDasharray="4 4"/>
                    <XAxis dataKey="date" padding={{left: 30, right: 30}}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{r: 10}}/>
                </LineChart>
            </CardContent>
        </Card>
    );
}

LineChartComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineChartComponent);