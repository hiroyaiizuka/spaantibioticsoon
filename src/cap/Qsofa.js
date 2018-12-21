import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Qsofa extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    const checked = !this.state.checked
    this.setState({ checked});
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup >
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChange}
              value="checked"
              classes={{
                root: classes.root,
                checked: classes.checked,
              }}
            />
          }
          label= {this.props.name}
        />
            
      </FormGroup>
    );
  }
}

Qsofa.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Qsofa);
