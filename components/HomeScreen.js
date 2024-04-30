import {StyleSheet, Text, View, Image, Button} from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Home</Text>

        </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
    },
});