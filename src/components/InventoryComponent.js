import React, { Component, useMemo, useState, useEffect } from "react";
import { Table, Card, CardBody, CardHeader } from 'reactstrap';

class Inventory extends Component {
    constructor(props){
        super(props);
        this.state = {
            assetData: JSON.parse(localStorage.getItem('test1')),
            inventory: []
        }
        this.LoadData = this.LoadData.bind(this);
    }

    LoadData(){
        var searchInput = document.getElementById("searchInput")
        
        if (this.state.assetData != null) {
            {this.state.assetData.filter(asset => asset.AssetTag === searchInput.value).map(filteredAsset =>(
               this.setState({
                   inventory: filteredAsset
               })
            ))}
            
        }
        console.log(this.state.inventory)
    }
    render(){
        //var searchInput = document.getElementById("searchInput")
    
        if (this.state.assetData != null) {
            this.state.inventory = this.state.assetData.map(asset => {
                return (
                    <tr key={asset.AssetTag}>
                        <RenderInventory asset={asset} />
                    </tr>
                )
                
            });
        }

        function RenderInventory({ asset }) {

            return (
                <><td>{asset.AssetTag}</td><td>{asset.SerialNumber}</td><td>{asset.Modelinput}</td><td>{asset.Statusinput}</td><td>{asset.AssetName}</td>
                    <td>{asset.Supplier}</td><td>{asset.OrderNum}</td><td>{asset.PurchaseDate}</td><td>{asset.PurchaseCost}</td>
                </>
            );
        }

    return (
        <main className="main">
            <div className="container">
                <Card>
                    <div className="hardware-table" styles="background-color: rgb(240, 240, 240);">
                        <span>Asset Inventory System </span>
                        <div className="row">
                            <div className="col-12">
                                <input id="searchInput" type="text" />
                            </div>
                            
                            <div className="col-4">
                                <button onClick={() => "addInput()"} id="addInput" className="btn btn-primary" value="addInput">
                                    <i className="fa"></i> Go
                                </button>
                                <button onClick={() => this.LoadData()}  id="addLoadData" className="btn btn-primary">
                                    <i className="fa"></i> Load Data
                                </button>
                            </div>
                        </div>
                        <span>-------------------------------</span>
                        <CardBody>
                            <Table bordered hover striped>
                                <thead>
                                    <tr>
                                        <th>Asset Tag</th>
                                        <th>Serial</th>
                                        <th>Model</th>
                                        <th>Status</th>
                                        <th>Asset Name</th>
                                        <th>Supplier</th>
                                        <th>Order Number</th>
                                        <th>Purchase Date</th>
                                        <th>Purchase Cost</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody">
                                {this.state.inventory}
                                </tbody>
                                
                            </Table>
                        </CardBody>
                    </div>
                </Card>
            </div>
        </main >
    );
    }
}

export default Inventory;