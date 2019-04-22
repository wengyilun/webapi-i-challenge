import React, { createRef, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PinkButton from "../../components/Button/PinkButton";
import {connect} from 'react-redux'
import Map from '../map/CustomMap'
import {updateUser, signupUser, findUser, getUsers, deleteUser} from "../../actions"
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import avatar from "../../assets/avatar.jpg";

const styles = theme => ({
	root: {
		display:"flex",
		flexDirection:"column",
		alignItems:"center",
		width: "100%",
		margin: "0 auto",
		maxWidth: "400px",
		backgroundColor: "pink",
	},
	inline: {
		display: 'inline',
	},
});


class AdminHomePage extends Component {
	componentDidMount() {
		this.props.getUsers()
		.then(res => {
			console.log('res', res)
		})
	}
	
	onGetUsers = ()=>{
		this.props.getUsers()
			.then(res => {
				console.log('res', res)
			})
	}
	
	addUser = ()=>{
		const user =
		{
			"name": "Eweng",
			"bio": "This is Eweng's Profile",
		}
		
		this.props.signupUser(user)
			.then(res => {
				console.log('res', res)
			})
	}
	

	render() {
		console.log('this.props', this.props)
		const { classes, users } = this.props;
		console.log('this.props', this.props)
		return (
			<div className={classes.container} >
				<PinkButton onClick={this.onGetUsers}>Get Users</PinkButton>
				<PinkButton onClick={this.addUser}>Post Users</PinkButton>
				<List className={classes.root}>
					{users.map((user, idx) => {
						return (
							<ListItem alignItems="flex-start" key={idx}>
								<ListItemAvatar>
									<Avatar alt="Remy Sharp" src={avatar} />
								</ListItemAvatar>
								<ListItemText
									primary="Brunch this weekend?"
									secondary={
										<React.Fragment>
											<Typography component="span" className={classes.inline} color="textPrimary">
												{user.name}
											</Typography>
											{user.bio}
										</React.Fragment>
									}
								/>
							</ListItem>
						)
					})}
				</List>
			
			</div>
		
		);
	}
}


const mapStateToProps = ({adminReducer}) => (
	{
		users:adminReducer.users,
		// driversNearby: riderReducer.driversNearby,
		// submitDriverReviewSuccessMessage:riderReducer.submitDriverReviewSuccessMessage
	}
)

export default connect(
	mapStateToProps,
   {updateUser, signupUser, findUser, getUsers, deleteUser}
)(withStyles(styles)(AdminHomePage));
