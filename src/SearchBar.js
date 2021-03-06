import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
//import './SearchBar.css';
import ResultsTable from './ResultsTable'
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Flux Federation 47/Hanson Street, Mount Cook, Wellington',
                  }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => this.showResults( lat, lng))
    //  .catch(error => console.error('Error', error))
  }


  showResults(lat, lng) {
    ReactDOM.render(<ResultsTable address={this.state.address} lat={lat} lng={lng} />, document.getElementById('results'))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const options = {
      componentRestrictions: {country: 'nz'}
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
         inputProps={inputProps}
         options={options} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
export default SearchBar;