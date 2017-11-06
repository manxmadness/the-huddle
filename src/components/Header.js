import React, {Component} from 'react';
import logo from '../logo.svg';
import SearchInput, {createFilter} from 'react-search-input';

class Header extends Component {

  render(){
    return (
      <div className="row justify-content-end align-items-center head">
  <img className="logo" src={logo} alt="logo" width="200"/>
  <form className="form-inline my-2 my-lg-0 search">
      <SearchInput placeholder="Filter" className="search-input" onChange={this.searchUpdated} />
  </form>
  <button className="btn btn-circle btn-lg btn-light" onClick={()=> this.changeVisibility()}><i className="fa fa-thumb-tack" aria-hidden="true"></i></button>
</div>
    )
  }
}
export default Header
