import { Component } from 'react';
import Header from './HeaderComponent';
import Sidenav from './Sidenavcomponent';
import Dashboard from './DashboardComponent';
import AssetEntry from './AssetEntryComponent';
import Inventory from './InventoryComponent';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            assetData: JSON.parse(localStorage.getItem('test1')),
        }
    }

    render(){
        return(
            <div>
                <Sidenav />
                <Header />
                <Switch>
                    <Route path='/dashboard' render={() => <Dashboard assetData={this.state.assetData} /> }
                    />
                    <Route path='/assetentry' component={AssetEntry} />
                    <Route path='/inventory' render={() => <Inventory assetData={this.state.assetData} /> } />
                </Switch>
                <Redirect to='dashboard' />
            </div>
        );
    }
}

export default Main;