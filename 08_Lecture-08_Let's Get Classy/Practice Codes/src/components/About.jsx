import UserProfile from './UserProfile'
import { Component } from 'react'
    
class About extends Component{
    // constructor(props){
    //     super(props);
    //     // console.log('Parent Constructor.')
    //     // load with dummy data
    //     // this.state = {
    //     //     profileData : {

    //     //     }
    //     // }
    // }
//    componentDidMount(){
//         // console.log('Parent Component Did Mount')
//         // calling APi (github api to fetch user profile)
//             const url = "https://api.github.com/users/shoaib-1729"
//             const data = await fetch(url);
//             const jsonData = await data.json();
//            // set state with api data
//            this.setState({
//                  profileData: jsonData
//            })
//     }
    render(){
        // console.log('Parent Render.')
        return(
            <div className="profile-container">
                    <UserProfile value={"First"} />

                    {/* <UserProfile value={"Second"} name={'Akshay Saini'} location={'Bangalore'} /> */}
            </div>
            )
    }
}


export default About