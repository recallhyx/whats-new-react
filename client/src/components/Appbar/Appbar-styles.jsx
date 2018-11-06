import { fade } from '@material-ui/core/styles/colorManipulator';

export function styles(theme) {
    return {
        root: {
          flexGrow: 1,
        },
        grow: {
          flexGrow: 1,
        },
        menuButton: {
          marginLeft: -12,
          marginRight: 20,
        },
        leftIcon: {
          marginRight: 10,
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginRight: theme.spacing.unit * 2,
          marginLeft: 0,
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
          },
        },
        searchIcon: {
          width: theme.spacing.unit * 9,
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        suggestionsList: {
          margin: 0,
          padding: 0,
          listStyleType: 'none',
        },
        inputRoot: {
          color: 'inherit',
          width: '100%',
        },
        inputInput: {
          paddingTop: theme.spacing.unit,
          paddingRight: theme.spacing.unit,
          paddingBottom: theme.spacing.unit,
          paddingLeft: theme.spacing.unit * 10,
          transition: theme.transitions.create('width'),
          width: '300px',
          [theme.breakpoints.up('md')]: {
            width: 200,
            '&:focus': {
              width: 300,
            },
          },
        },
      }
}

export const suggestionStyle = {
  divider: {
    flex: 1
  },
  suggestionIcon: {
    margin: '0 5px'
  },
  suggestionInner: {
    display: 'flex',
    width: '300px',
    alignItems: 'center'
  },
}