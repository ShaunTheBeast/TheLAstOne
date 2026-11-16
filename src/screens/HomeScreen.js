import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollImage, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.hero}>
                <Text style={styles.tagline}>Est. 2023 • Durban, South Africa</Text>
                <Text style={styles.heading}>Caring for pets. Building confident owners.</Text>
                <Text style={styles.subtext}>
                    Professional pet care and training courses designed to develop practical skills, confidence, and stronger relationships between pets and their owners[cite: 1, 6].
                </Text>
                
                <TouchableOpacity 
                    style={styles.primaryButton}
                    onPress={() => navigation.navigate('Calculator')}
                >
                    <Text style={styles.buttonText}>Get an Instant Quote</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.secondaryButton}
                    onPress={() => navigation.navigate('Services')}
                >
                    <Text style={styles.secondaryButtonText}>Explore Courses</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' }, // Cream background[cite: 1, 6]
    hero: { padding: 24, alignItems: 'center', marginTop: 20 },
    tagline: { color: '#268D81', fontWeight: '700', fontSize: 12, marginBottom: 10, textTransform: 'uppercase' },
    heading: { fontSize: 28, fontWeight: 'bold', color: '#285062', textAlign: 'center', marginBottom: 15 },
    subtext: { fontSize: 14, color: '#555', textAlign: 'center', lineHeight: 22, marginBottom: 30 },
    primaryButton: { backgroundColor: '#DA6F43', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 12 },
    secondaryButton: { borderWidth: 2, borderColor: '#285062', width: '100%', padding: 15, borderRadius: 10, alignItems: 'center' },
    buttonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },
    secondaryButtonText: { color: '#285062', fontWeight: 'bold', fontSize: 16 }
});