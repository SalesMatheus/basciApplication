import React, { Component } from "react";
import api from '../services/api';

import { View, Text } from "react-native";

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt",
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
    };

    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });

    };

    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    render() {
        const { products, page, productInfo } = this.state;

        return (
            <View>
                <Text>Hello World!!</Text>
                {products.map(product => (
                    <Text key={product._id}>{product.title}</Text>
                ))}
            </View>
        );
    }
}