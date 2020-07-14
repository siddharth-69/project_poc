import React, {Component} from 'react'
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = (event) => this.setState({searchTerm: event.target.value});

  handleSubmit = (event) => {
    const {searchTerm}= this.state.searchTerm
    const {onSubmit}=this.props

    onSubmit(searchTerm)
    event.preventDefault()
  }

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
          fullWidth
          label="Search..."
          value={this.searchTerm}
          onChange={this.handleChange}
        />
        </form>
      </Paper>
    )
  }
}

export default SearchBar


/*
export default ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (event) => setSearchTerm(event.target.value);
  
    const onKeyPress = (event) => {
      if (event.key === "Enter") {
        onSubmit(searchTerm);
      }
    }
  
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
      </Paper>
    );
  }
*/