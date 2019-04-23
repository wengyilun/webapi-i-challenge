import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});

function AddButton(props) {
	const { classes } = props;
	return (
		<div>
			{/*<Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>*/}
				{/*<AddIcon />*/}
			{/*</Fab>*/}
			<Fab size="medium" color="secondary" aria-label="Add" className={classes.margin}>
				<AddIcon />
			</Fab>
			{/*<Fab color="secondary" aria-label="Add" className={classes.margin}>*/}
				{/*<AddIcon />*/}
			{/*</Fab>*/}
		</div>
	);
}

AddButton.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
