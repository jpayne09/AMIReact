import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function AssetInformation(props){

    if(props){
        return(
            <div>
            <main id="main">
            <div className="form-container">
                <div className="row">
                <Card>
                    <CardTitle>View Asset ID: {props.asset.AssetTag}</CardTitle>
                        <h2>{props.asset.AssetTag}</h2>
                    <CardBody>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3">
                                    <strong>Asset Name</strong>
                                </div>
                                <div className="col-md-6">
                                    {props.asset.AssetName}    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <strong>Asset Tag</strong>
                                </div>
                                <div className="col-md-6">
                                    {props.asset.AssetTag}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <strong>Asset Model</strong>
                                </div>
                                <div className="col-md-6">
                                    {props.asset.Modelinput}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                </div>
            </div>
            </main>
            </div>
        )
    }
}

export default AssetInformation;