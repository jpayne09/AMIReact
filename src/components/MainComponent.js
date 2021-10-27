import { Component } from 'react';
import Header from './HeaderComponent';
import Sidenav from './Sidenavcomponent';
import Dashboard from './DashboardComponent';
import AssetEntry from './AssetEntryComponent';
import Inventory from './InventoryComponent';
import Contact from './Contactuscomponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import FilterableProductTable from './Tablecomponents/FilterableProductTable';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            assetData: JSON.parse(localStorage.getItem('test1')),
            filterText : ''
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
                    <Route path='/inventory' render={() => <Inventory assetData={this.state.assetData} filterText={this.state.filterText} /> } />
                    <Route path='/contact' component={Contact} />
                </Switch>
                <Redirect to='dashboard' />
            </div>
        );
    }
}

export default Main;