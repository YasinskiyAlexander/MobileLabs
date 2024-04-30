import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "./components/HomeScreen";
import GalleryScreen from "./components/GalleryScreen";
import ProfileScreen from "./components/ProfileScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                {/*<StatusBar style="auto"/>*/}
                    <View style={styles.header}>
                        <Image
                            source={{uri: 'https://ztu.edu.ua/img/logo/university-colored.png'}}
                            style={styles.logo}
                        />
                        <Text style={styles.appName}>Ясінський Олександр ІПЗк-22-1</Text>
                    </View>

                <View style={styles.main}>
                    <Tab.Navigator screenOptions={{
                        tabBarActiveTintColor: '#0048ff',
                        tabBarInactiveTintColor: 'gray',
                        headerShown: false,
                        // tabBarShowLabel: false,
                    }}>
                        <Tab.Screen name="Головна" component={HomeScreen} options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="home" size={size} color={color}/>
                            )
                        }}/>
                        <Tab.Screen name="Фотогалерея" component={GalleryScreen} options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="image-outline" size={size} color={color}/>
                            )
                        }}/>
                        <Tab.Screen name="Профіль" component={ProfileScreen} options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="person" size={size} color={color}/>
                            )
                        }}/>
                    </Tab.Navigator>
                </View>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        flex: 1,
        backgroundColor: '#fff',
    },
    // headerContainer: {
    //
    // },
    header: {
        height: 40,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: 32,
        width: 140
    },
    appName: {
        fontSize: 16,
        fontWeight: '500',
    },
    main: {
        flex: 1,
        backgroundColor: "#003cff",

    },
    title: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 14,
    },
});
