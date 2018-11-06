import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import InputBase from "@material-ui/core/InputBase";

import deburr from "lodash/deburr";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Popper from '@material-ui/core/Popper';
import {
  // renderInputComponent,
  // renderSuggestionsContainer,
  renderSuggestion,
  // getSuggestions,
  // getSuggestionValue
} from "./Appbar-component";
import { styles } from "./Appbar-styles";
import Autosuggest from "react-autosuggest";

const suggestions = [
  { full_name: "Afghanistan",stargazers_count: 10000 },
  { full_name: "Aland Islands",stargazers_count: 10000 },
  { full_name: "Albania",stargazers_count: 10000 },
  { full_name: "Algeria",stargazers_count: 10000 },
  { full_name: "American Samoa" ,stargazers_count: 10000},
  { full_name: "Andorra",stargazers_count: 10000 },
  { full_name: "Angola",stargazers_count: 10000 },
  { full_name: "Anguilla",stargazers_count: 10000 },
  { full_name: "Antarctica",stargazers_count: 10000 },
  { full_name: "Antigua and Barbuda",stargazers_count: 10000 },
  { full_name: "Argentina",stargazers_count: 10000 },
  { full_name: "Armenia",stargazers_count: 10000 },
  { full_name: "Aruba" ,stargazers_count: 10000},
  { full_name: "Australia",stargazers_count: 10000 },
  { full_name: "Austria",stargazers_count: 10000 },
  { full_name: "Azerbaijan",stargazers_count: 10000 },
  { full_name: "Bahamas",stargazers_count: 10000 },
  { full_name: "Bahrain",stargazers_count: 10000 },
  { full_name: "Bangladesh",stargazers_count: 10000 },
  { full_name: "Barbados" ,stargazers_count: 10000},
  { full_name: "Belarus",stargazers_count: 10000 },
  { full_name: "Belgium",stargazers_count: 10000 },
  { full_name: "Belize" ,stargazers_count: 10000},
  { full_name: "Benin" ,stargazers_count: 10000},
  { full_name: "Bermuda" ,stargazers_count: 10000},
  { full_name: "Bhutan",stargazers_count: 10000 },
  { full_name: "Bolivia, Plurinational State of",stargazers_count: 10000 },
  { full_name: "Bonaire, Sint Eustatius and Saba" ,stargazers_count: 10000},
  { full_name: "Bosnia and Herzegovina",stargazers_count: 10000 },
  { full_name: "Botswana",stargazers_count: 10000 },
  { full_name: "Bouvet Island",stargazers_count: 10000 },
  { full_name: "Brazil" ,stargazers_count: 10000},
  { full_name: "British Indian Ocean Territory",stargazers_count: 10000 },
  { full_name: "Brunei Darussalam",stargazers_count: 10000 }
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input
        }
      }}
      {...other}
    />
  );
}

// function renderSuggestion(suggestion, { query, isHighlighted }) {
//   const matches = match(suggestion.full_name, query);
//   const parts = parse(suggestion.full_name, matches);

//   return (
//     <MenuItem selected={isHighlighted} component="div">
//       <div>
//         {parts.map((part, index) => {
//           return part.highlight ? (
//             <span key={String(index)} style={{ fontWeight: 500 }}>
//               {part.text}
//             </span>
//           ) : (
//             <strong key={String(index)} style={{ fontWeight: 300 }}>
//               {part.text}
//             </strong>
//           );
//         })}
//       </div>
//     </MenuItem>
//   );
// }

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.full_name.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.full_name;
}

class MenuAppBar extends React.Component {
  state = {
    single: "",
    popper: '',
    auth: true,
    anchorEl: null,
    suggestions: []
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  // handleLogin = () => {
  //   this
  // }
  render() {
    const { classes, name } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const autosuggestProps = {
      renderInputComponent,
      suggestions: this.state.suggestions,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue,
      renderSuggestion
    };
    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <Typography  color="inherit" className={classes.grow}>
              What's New
            </Typography>
            <div className={classes.search}>
              <Autosuggest
                {...autosuggestProps}
                inputProps={{
                  classes,
                  placeholder: " 搜索仓库...",
                  value: this.state.popper,
                  onChange: this.handleChange("popper"),
                  inputRef: node => {
                    this.popperNode = node;
                  },
                  InputLabelProps: {
                    shrink: true
                  }
                }}
                theme={{
                  suggestionsList: classes.suggestionsList,
                  suggestion: classes.suggestion
                }}
                renderSuggestionsContainer={options => (
                  <Popper
                    anchorEl={this.popperNode}
                    open={Boolean(options.children)}
                  >
                    <Paper
                      square
                      {...options.containerProps}
                      style={{
                        width: this.popperNode
                          ? this.popperNode.clientWidth
                          : null
                      }}
                    >
                      {options.children}
                    </Paper>
                  </Popper>
                )}
              />
              {/* <InputBase
                placeholder="搜索仓库…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              /> */}
            </div>
            {auth ? (
              <div>
                <Button
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle className={classes.leftIcon} />
                  {name}
                </Button>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    同步我的 GitHub
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>退出</MenuItem>
                </Menu>
              </div>
            ) : (
              <Button
                aria-owns={open ? "menu-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleLogin}
                color="inherit"
              >
                登录
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
