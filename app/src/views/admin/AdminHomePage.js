import React, { createRef, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {getTime} from '../../utils/utils'
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
import TextField from "@material-ui/core/TextField";
import SearchAppBar from "../../components/SearchAppBar";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";


const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: "500px",
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
	margin: {
		margin: theme.spacing.unit,
	},
	extendedIcon: {
		marginRight: theme.spacing.unit,
	},
});


class AdminHomePage extends Component {
	state = {
		user:{
			name:'',
			bio:''
		}
	}
	
	
	componentDidMount() {
		this.props.getUsers()
		.then(res => {
			console.log('res', res)
		})
	}
	
	
	handleChange = name => event => {
		this.setState({
			...this.state,
			user:{
				...this.state['user'],
				[name]: event.target.value
			}
		});
	};
	
	
	onGetUsers = ()=>{
		this.props.getUsers()
			.then(res => {
				console.log('res', res)
			})
	}
	
	
	updateUser = ()=>{
		this.props.updateUser()
			.then(res => {
				console.log('res', res)
			})
	}
	
	
	deleteUser = (userId)=>{
		this.props.deleteUser(userId)
			.then(res => {
				console.log('res', res)
			})
	}
	
	
	
	addUser = ()=>{
		// const user =
		// {
		// 	"name": "Eweng",
		// 	"bio": "This is Eweng's Profile",
		// }
		
		this.props.signupUser(this.state.user)
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
							<ListItem alignItems="flex-start" key={idx} id={user.id}>
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
								<ListItemText>
									{/*Created: {moment().startOf('day').fromNow() } | Updated: {user.updated_at}*/}
									<h4>{  user.created_at}</h4>
								</ListItemText>
								<IconButton aria-label="Edit" className={classes.margin} onClick={e=> this.updateUser(e)}>
									<EditIcon fontSize="small" />
								</IconButton>
								<IconButton aria-label="Delete" className={classes.margin} onClick={e => this.deleteUser(user.id)}>
									<DeleteIcon fontSize="small" />
								</IconButton>
								<PinkButton  onClick={this.deleteUser}>Delete</PinkButton>
							</ListItem>
						)
					})}
				</List>
				<form className={this.props.classes.container} noValidate autoComplete="off" onSubmit={this.addUser}>
					<TextField
						id="standard-name"
						label="Name"
						className={this.props.classes.textField}
						name="name"
						value={this.state.user.name || ''}
						onChange={this.handleChange('name')}
						margin="normal"
					/>
					<TextField
						id="standard-name"
						label="age"
						className={this.props.classes.textField}
						value={this.state.user.bio || ''}
						name="bio"
						onChange={this.handleChange('bio')}
						margin="normal"
					/>
					
					<PinkButton simple color="primary" size="lg">
						Add User
						{/*{this.props.loggingIn*/}
							{/*? <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />*/}
							{/*: "Add Friends"*/}
						{/*}*/}
					</PinkButton>
				</form>
			</div>
		
		);
	}
}


const mapStateToProps = ({adminReducer}) => {
	// const filteredUsers = adminReducer.users
	return {
		users:adminReducer.users,
		// userIdDeleted: adminReducer.userIdDeleted
		// driversNearby: riderReducer.driversNearby,
		// submitDriverReviewSuccessMessage:riderReducer.submitDriverReviewSuccessMessage
	}
}


export default connect(
	mapStateToProps,
   {updateUser, signupUser, findUser, getUsers, deleteUser}
)(withStyles(styles)(AdminHomePage));
