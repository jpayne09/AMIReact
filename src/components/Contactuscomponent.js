import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as msRestNodeAuth from "@azure/ms-rest-nodeauth";
import { ComputeManagementClient, ComputeManagementModels, ComputeManagementMappers } from "@azure/arm-compute";
import {request} from '../MsGraphApiCall';

class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main className="id">
                <div className="container">
                    <div className="form-container">
                        <h4>Test</h4>
                        {request}
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;