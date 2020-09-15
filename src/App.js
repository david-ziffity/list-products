import React, { Component } from 'react';
import Products from './components/productlist'
import ProductPlaceholder from './components/product-placeholder'
//import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categoryName: '',
            loading: true
        };
    }

    componentDidMount() {
        fetch('https://uselectric.hawksearch.com/sites/uselectric/?mpp=10&pg=1&category=Halogen--Quartz-Halogen&hawkcustom=region11&hawkoutput=json')
          .then(res => res.json())
          .then((data) => {
              this.setState({
                  products: data.Results,
                  loading: false,
                  categoryName: data.Selections.category.Items[0].Label
              });
          })
          .catch(console.log);
    }

    render() {
//        if (!this.state.products || !this.state.categoryName)
//            return null;

        return (
          this.state.loading ? <ProductPlaceholder count={8} /> : <Products products={this.state.products} title={this.state.categoryName} />
          )
    }
}

export default App;
