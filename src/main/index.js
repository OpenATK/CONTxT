//import { set } from 'cerebral/operators';
//import { state } from 'cerebral/tags';

import localstore from './modules/localstore';

import * as providers from './providers';
import * as sequences from './sequences';
import * as errors from './errors';

// TODO: Should this be here??
import pages from '../pages';

// Parts of state to keep in localstorage
const store = localstore(['pageNum', 'surveyData']);

export default {
    sequences,
    state: {
        loggedin: null,
        resultsId: null,
        submitting: false,
        navigationOpen: true,
        confirmSubmitOpen: false,
        droneQRScannerActive: false,
        sensorQRScannerActive: false,
        surveyData: null,
        pastData: [],
        pages: [],
        pageNum: 0,
        questions: {
            showNavigationButtons: false,
            goNextPageAutomatic: true,
            clearInvisibleValues: 'onHidden',
            checkErrorsMode: 'onValueChanged',
            pages,
        },
    },
    catch: [
        // TODO: Pop up toast or something about giving permission?
        [errors.GetLocationError, ({error}) => console.error(error)],
        [Error, ({error}) => console.error(error)],
    ],
    providers,
    modules: {
        store,
        //storage,
    },
};