import { Component } from 'react';
import Header from './HeaderComponent';
import Sidenav from './Sidenavcomponent';
import Dashboard from './DashboardComponent';
import AssetEntry from './AssetEntryComponent';
import FilterTable from './InventoryComponent';
import Contact from './Contactuscomponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import AssetInformation from './AssetInfoComponent';

const mapStateToProps = (state) => {
    return {
        assetData: state.assetData
    };
};

class Main extends Component {
    render(){

        
        const assetwithId = ({match}) => {
            return (
                <AssetInformation 
                asset={this.props.assetData.filter(asset => asset.AssetTag === match.params.assetwithId)[0]}
                />

            );
        };
        return(
            <div>
                <Sidenav />
                <Header />
                <Switch>
                    <Route path='/dashboard' render={() => <Dashboard assetData={this.props.assetData} /> }
                    />
                    <Route exact path='/assetentry' component={AssetEntry} />
                    <Route exact path='/inventory' render={() => <FilterTable assetData={this.props.assetData} filterText={this.props.filterText} /> } />
                    <Route path='/inventory/:assetwithId' component={assetwithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='dashboard' />
                </Switch>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));
//export default Main;