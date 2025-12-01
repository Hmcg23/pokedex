import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

export default function Details() {
    const params = useLocalSearchParams();

    const name = params.name;

    useEffect(() => {
        // fetch detailed info for the pokemon using the name from params
        fetchPokemonDetails();
    }, []);

    async function fetchPokemonDetails() {
        try {
            const response = await fetch(

            )
        } catch (error) {
            console.error("Error fetching pokemon details:", error);
        }

    return (
        <>
            <Stack.Screen options={{ title: params.name as string }} />
            <ScrollView
            contentContainerStyle={{
                gap: 16,
                padding: 16
            }}
            >
            </ScrollView>        
        </>

    );
}


const styles = StyleSheet.create({}); 