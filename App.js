import React from 'react';
import {Text,View} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import NotificationScreen from './screens/NotificationScreen';
import StudentScreen from './screens/StudentScreen';
import RemarkScreen from './screens/RemarkScreen';
import Profile from './screens/Profile';
import LoginScreen from './screens/LoginScreen'
import LibraryScreen from './screens/LibraryScreen';

export default class App extends React.Component {
  render(){
    return(
       <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Notification : {screen : NotificationScreen},
  Student : {screen : StudentScreen},
  Remark : {screen : RemarkScreen},
  Profile : {screen : Profile},
  Library : {screen : LibraryScreen},
},
  {
    defaultNavigationsOptions : ({navigation}) => ({
      tabBarIcon : () => {
        const routeName = navigation.state.routeName
        if(routeName === 'Notification'){
          return(
            <Image
              source = {require("./assets/bell.png")}
              style = {{width : 20, height : 20}}
            />
          )
        }
        else if(routeName === 'Student'){
          return(
            <Image
              source = {require("./assets/book.png")}
              style = {{width : 20, height : 20}}
            />
          )
        }
        else if(routeName === 'Remarks'){
          return(
            <Image
              source = {require("./assets/remark.png")}
              style = {{width : 20, height : 20}}
            />
          )
        }
        else if(routeName === 'Profile'){
          return(
            <Image
              source = {require("./assets/profile.png")}
              style = {{width : 20, height : 20}}
            />
          )
        }
        else if(routeName === 'Library'){
          return(
            <Image
              source = {require("./assets/library.png")}
              style = {{width : 20, height : 20}}
            />
          )
        }
      }
    })
  }
)

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  TabNavigator : {screen : TabNavigator},
})

const AppContainer = createAppContainer(SwitchNavigator)




