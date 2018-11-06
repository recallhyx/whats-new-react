import React from "react";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from '@material-ui/core/MenuItem';
import deburr from 'lodash/deburr';
import {loadSuggestions} from '../../service/github'
import { StarIcon } from '../icons'
import { suggestionStyle} from './Appbar-styles'
export function renderSuggestionsContainer (options) {
    const { containerProps, children } = options
  
    return (
      <Paper {...containerProps} square>
        {children}
      </Paper>
    )
  }


export function renderInputComponent(inputProps) {
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
export function renderSuggestion( suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.full_name, query);
  const parts = parse(suggestion.full_name, matches);

  
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div className={suggestionStyle.suggestionInner}>
        {parts.map((part, index) => {
          return part.highlight ? (
            <strong key={index}>
              {part.text}
            </strong>
          ) : (
            <span key={index}>
              {part.text}
            </span>
          )
        })}
        <span className={suggestionStyle.divider}></span>
        {StarIcon(suggestionStyle.suggestionIcon)}{suggestion.stargazers_count}
      </div>
    </MenuItem>
  );
}

export function getSuggestions(value) {
  console.log(value);
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  
  if(!inputLength){
    return [];
  }
  const result = loadSuggestions(value);

  console.log(result);
  // template return [];
  return [];

}

export function getSuggestionValue(suggestion) {
  return suggestion;
}
