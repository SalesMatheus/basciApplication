import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

const Routes = createAppContainer(
    createStackNavigator({
        Main
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    })
);

export default Routes;