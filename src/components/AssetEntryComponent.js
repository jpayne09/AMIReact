import React, { Component } from 'react';
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';


class Assetentry extends Component {
    constructor(props){
        super(props);

        this.state = {
            assettag: '',
            touched: {
                assettag: false
            }
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    store() {
    var inputAssetTag = document.getElementById("assettag");
    var serialnumberinput = document.getElementById("serialnumberinput");
    var modelinput = document.getElementById("modelinput");
    var statusinput = document.getElementById("statusinput")
    var assetnameinput = document.getElementById("assetnameinput");
    var purchasedateinput = document.getElementById("purchasedateinput");
    var supplierinput = document.getElementById("supplierinput");
    var ordernumberinput = document.getElementById("ordernumberinput");
    var purchasecostinput = document.getElementById("purchasecostinput");

    
    var oldItems = JSON.parse(localStorage.getItem('test1'));
    if(oldItems == null){
        let test1 = [{"AssetTag": inputAssetTag.value,"SerialNumber": serialnumberinput.value,"Modelinput": modelinput.value,"Statusinput":statusinput.value,
        "AssetName": assetnameinput.value,"PurchaseDate": purchasedateinput.value,"Supplier":supplierinput.value,"OrderNum":ordernumberinput.value,
        "PurchaseCost":purchasecostinput.value}];
        localStorage.setItem('test1', JSON.stringify(test1));
    }else{
        let newItem = [{"AssetTag": inputAssetTag.value,"SerialNumber": serialnumberinput.value,"Modelinput": modelinput.value,"Statusinput":statusinput.value,
        "AssetName": assetnameinput.value,"PurchaseDate": purchasedateinput.value,"Supplier":supplierinput.value,"OrderNum":ordernumberinput.value,
        "PurchaseCost":purchasecostinput.value}];
        oldItems.push(newItem[0]);
        localStorage.setItem('test1', JSON.stringify(oldItems));
    }

     
    }

    validate(assettag){
        const errors ={
            assettag: ''
        };
        
        if(this.state.touched.assettag){
            if(assettag.length < 3){
                errors.assettag = "Asset tag must be longer than 2";
            }
        }

        return errors;
    }
    handleInputChange(event) {
        this.setState ({
            assettag: event.target.value
        })
    }

//const Assetentry = () => 
    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }
    render(){
    const errors = this.validate(this.state.assettag);
    return (
        <main id="main">
            <div className="container">
                <div className="form-container">
                    <div className="row">
                        <div className="col-md-12">
                            <Form>
                                <FormGroup>
                                    <label for="AssetTag">Asset Tag</label>
                                    <input type="text" className="form-control" id="assettag" 
                                        placeholder="Enter AssetTag" value={this.state.assettag} onChange={this.handleInputChange}
                                         onBlur={this.handleBlur("assettag")} invalid={errors.assettag} 
                                        />
                                    <large className="form-text text-muted">{this.state.assettag}</large>
                                    <FormFeedback>{errors.assettag}</FormFeedback>
                                    <small id="assetHelp" className="form-text text-muted">Asset Tag will be utilized as a key id.</small>
                                </FormGroup>
                                <div className="form-group">
                                    <label for="serialnumberinput">Serial</label>
                                    <input type="text" className="form-control" id="serialnumberinput"
                                        placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="modelinput">Model</label>
                                    <input type="text" className="form-control" id="modelinput" placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="statusinput">Status</label>
                                    <input type="text" className="form-control" id="statusinput" placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="assetnameinput">Asset Name</label>
                                    <input type="text" className="form-control" id="assetnameinput" placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="purchasedateinput">Purchase Date</label>
                                    <input type="text" className="form-control" id="purchasedateinput"
                                        placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="supplierinput">Supplier</label>
                                    <input type="text" className="form-control" id="supplierinput" placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="ordernumberinput">Order Number</label>
                                    <input type="text" className="form-control" id="ordernumberinput"
                                        placeholder="XXXXXXXXX" />
                                </div>
                                <div className="form-group">
                                    <label for="purchasecostinput">Purchase Cost</label>
                                    <input type="text" className="form-control" id="purchasecostinput"
                                        placeholder="XXXXXXXXX"/>
                                </div>
                                <button onClick={this.store} type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
}

export default Assetentry;