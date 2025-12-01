import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

export default function Details() {
    const params = useLocalSearchParams();
    const [pokemon, setPokemon] = useState<any>(null);

    console.log('details params:', params);

    useEffect(() => {
        if (!params.name) return;
        fetchPokemonDetails();
    }, [params.name]);

    async function fetchPokemonDetails() {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${params.name}`
            );
            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            console.error("Error fetching pokemon details:", error);
        }
    }

    return (
        <>
            <Stack.Screen options={{ title: (params.name as string) || 'Details' }} />
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


const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});