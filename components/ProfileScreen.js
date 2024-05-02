import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {useState} from "react"

const ProfileScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');


    const submitForm = () => {
        const registrationData = {
            "email": email,
            "password": password,
            "lastName": lastName,
            "firstName": firstName
        }
        console.log("Дані отримані з форми")
        console.log(registrationData)
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.form}>
                <View>
                    <Text>Електронна пошта</Text>
                    <TextInput value={email}

                               onChangeText={value => setEmail(value)}
                               style={styles.input}/>
                </View>
                <View>
                    <Text>Пароль</Text>
                    <TextInput value={password}
                               onChangeText={value => setPassword(value)}
                               secureTextEntry={true}
                               style={styles.input}/>
                </View>
                <View>
                    <Text>Пароль (ще раз)</Text>
                    <TextInput value={password2}
                               onChangeText={value => setPassword2(value)}
                               secureTextEntry={true}
                               style={styles.input}/>
                </View>
                <View>
                    <Text>Прізвище</Text>
                    <TextInput value={lastName}
                               onChangeText={value => setLastName(value)}
                               style={styles.input}/>
                </View>

                <View>
                    <Text>Ім'я</Text>
                    <TextInput value={firstName}
                               onChangeText={value => setFirstName(value)}
                               style={styles.input}/>
                </View>
                <Button
                    onPress={submitForm}
                    title="Зареєструватися"
                    color="#0048ff"
                />
            </View>
        </View>
    );
}
export default ProfileScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
    },
    title: {
        marginTop: 20,
        textAlign: "center",
        fontWeight: "500",
        fontSize: 24,
    },
    form: {
        marginTop: 20,
        rowGap: 12,
    },
    input: {
        height: 40,
        marginBottom: 12,
        padding: 10,
        borderWidth: 2,
        borderColor: "#bbb",
        borderRadius: 8,
    },
});