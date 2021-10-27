import React, {Component} from 'react';
import SearchBar from './Searchbar';
import ProductTable from './ProductTable';

function handleFilterTextChange(filterText) {
  this.setState({
    filterText: filterText
  });
}


function handleInStockChange(inStockOnly) {
  this.setState({
    inStockOnly: inStockOnly
  })
}

function FilterableProductTable(props) {
      
    props.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    props.handleInStockChange = this.handleInStockChange.bind(this);
    
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
}
  
export default FilterableProductTable;  