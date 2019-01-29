import React, {Component} from 'react';
import {connect} from '@cerebral/react';
import {state,signal} from 'cerebral/tags';

import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import QRDialog from './QRDialog';
import Questions from './Questions';

class App extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        let props = this.props;
        return (
            <React.Fragment>
            <CssBaseline />
            <div className='App'>
                <QRDialog
                    open={props.droneQRScannerActive}
                    onClose={props.hideDroneQRScanner}
                />
                <QRDialog
                    open={props.sensorQRScannerActive}
                    onClose={props.hideSensorQRScanner}
                />
                <Questions
                    isSinglePage={false}
                    completedHtml={
                        (<div> woo done!</div>)
                    }
                    onValueChanged={({data}) => props.setSurveyData({data})}
                    onComplete={({data}) => console.log(JSON.stringify(data))}
                />
            </div>
            </React.Fragment>
        );
    }
}

export default connect({
    questions: state`questions`,
    droneQRScannerActive: state`droneQRScannerActive`,
    sensorQRScannerActive: state`sensorQRScannerActive`,
    showDroneQRScanner: signal`showDroneQRScanner`,
    showSensorQRScanner: signal`showSensorQRScanner`,
    hideDroneQRScanner: signal`hideDroneQRScanner`,
    hideSensorQRScanner: signal`hideSensorQRScanner`,
    setSurveyData: signal`setSurveyData`,
    init: signal`init`,
}, App);
