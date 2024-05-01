import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import {useEffect, useState} from "react";
import axios from "axios";

const HomeScreen = () => {
    const [news, setNews] = useState([]);

    const getNews = () => {
        axios.get('https://raw.githubusercontent.com/YasinskiyAlexander/MobileAppData/main/news.json').then((response) => {
            console.log(response.data);
            setNews(() => response.data)
        });
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <ScrollView bounces={false} showsHorizontalScrollIndicator={true} style={styles.screen}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.newsContainer}>
                {
                    news.length > 0 &&
                    news.map((item, id) => {
                        return <View key={id} style={styles.newsElem}>
                            <Image source={{uri: item.url}}
                                   style={styles.newsImg}/>
                            <View style={styles.newsText}>
                                <Text style={styles.newsTitle}>{item.title}</Text>
                                <Text style={styles.newsDate}>{item.date}</Text>
                                <Text style={styles.newsDescription}>{item.description}</Text>
                            </View>
                        </View>
                    })
                }
            </View>
        </ScrollView>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 8,
        backgroundColor: "#fff",
    },
    title: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 20,
    },
    newsContainer: {
        marginTop: 10
    },
    newsElem: {
        flexDirection: "row",
        marginBottom: 30,
    },
    newsImg: {
        width: 118,
        height: 73,
        marginRight: 16
    },
    newsText: {
        flex: 1,
    },
    newsTitle: {
        fontWeight: "500",
        fontSize: 16,
    },
    newsDate: {
        color: "#5b5b5b",
        fontSize: 12,
    },
    newsDescription: {
        // color: "#5b5b5b",
        fontSize: 14,
    },
});