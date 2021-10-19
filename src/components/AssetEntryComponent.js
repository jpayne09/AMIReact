import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function store() {
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
        let newItem = [{"AssetTag": inputAssetTag.value,"SerialNumber": serialnumberinput.value,"ModelInput": modelinput.value,"StatusInput":statusinput.value,
        "AssetName": assetnameinput.value,"Purchase Date": purchasedateinput.value,"Supplier":supplierinput.value,"Order Num":ordernumberinput.value,
        "Purchase Cost":purchasecostinput.value}];
        oldItems.push(newItem[0]);
        localStorage.setItem('test1', JSON.stringify(oldItems));
    }

     
}


const Assetentry = () => 
{
    
    return (
        <main id="main">
            <div className="container">
                <div className="form-container">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                <div className="form-row">
                                    <label for="AssetTag">Asset Tag</label>
                                    <input type="text" className="form-control" id="assettag" aria-describedby="assettag"
                                        placeholder="Enter AssetTag" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                        anyone
                                        else.</small>
                                </div>
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
                                <button onClick={store} type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Assetentry;