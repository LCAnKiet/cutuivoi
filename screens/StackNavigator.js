import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from'./Global/AuthProvider'
import { useContext } from 'react';

const Stack= createStackNavigator();

export default  function StackNavigator() {
    const {user}= useContext(AuthContext)

    return (
      <NavigationContainer>
        <Stack.Navigator >
            {user ? <><Stack.Screen options={{ headerShown: false }} name="MainContainer" component={MainContainer} /></>:<>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} /></>
}
          
          
  
        </Stack.Navigator>
      </NavigationContainer>
    )
  }