import React from 'react'

class UserProfile extends React.Component{
    constructor(props){
        super(props);
         console.log(`${props.value} Child Constructor.`)
        //  console.log(props);
            this.state={
                profileData:{
                }
            }
    }
    async componentDidMount(){
        // calling APi (github api to fetch user profile)
        console.log(`${this.props.value} Child Did Mount.`)

            const url = "https://api.github.com/users/shoaib-1729"
            const data = await fetch(url);
            const jsonData = await data.json();
           // set state with api data
           this.setState({
                 profileData: jsonData
           })
    }
    componentDidUpdate(){
        console.log(`${this.props.value} Child Did Update.`)
    }
    componentWillUnmount(){
        console.log(`${this.props.value} Component Will Unmount.`)
    }
    render(){
        console.log(`${this.props.value} Child Render.`)
        // const {name, location} = this.props;
        const {login, name, bio, avatar_url } = this.state.profileData;
        console.log(this.state.profileData);
        return(
            <div className='user-container'>
                <img src={avatar_url} alt="" />
                <h1>{login}</h1>
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        )
    }
}

export default UserProfile