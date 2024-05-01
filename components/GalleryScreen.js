import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";

const GalleryScreen = () => {
    const [images, setImages] = useState([]);

    const getImages = () => {
        axios.get('https://raw.githubusercontent.com/YasinskiyAlexander/MobileAppData/main/images.json').then((response) => {
            console.log(response.data);
            setImages(() => response.data)
        });
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
            <ScrollView>
            <View style={styles.imgContainer}>
                {
                    images.length > 0 &&
                    images.map((url, id) => {
                        return <Image key={id}
                                source={{uri: url}}
                                style={styles.image}
                            />
                    })
                }
            </View>
            </ScrollView>
    );
}
export default GalleryScreen;

const styles = StyleSheet.create({
    imgContainer: {
        paddingHorizontal: 8,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
    },
    image: {
        width: "48%",
        height: 120,
    }
});