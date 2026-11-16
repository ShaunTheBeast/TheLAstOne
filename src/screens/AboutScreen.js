import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>About Pawsitive Pet Academy</Text>
            <Text style={styles.paragraph}>
                Founded in 2023 in Durban by Sarah Smith[cite: 1, 6], Pawsitive Pet Academy provides professional education and practical training in pet care, helping individuals build confidence and technical skills in animal welfare.
            </Text>
            <View style={styles.statsCard}>
                <Text style={styles.statNumber}>2023</Text>
                <Text style={styles.statLabel}>Founded Year[cite: 1, 6]</Text>
            </View>
            <View style={styles.statsCard}>
                <Text style={styles.statNumber}>7</Text>
                <Text style={styles.statLabel}>Specialized Courses[cite: 1, 6]</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#285062', marginBottom: 15 },
    paragraph: { fontSize: 15, color: '#334155', lineHeight: 24, marginBottom: 20 },
    statsCard: { backgroundColor: '#268D81', padding: 16, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
    statNumber: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
    statLabel: { color: '#fff', fontSize: 12, textTransform: 'uppercase', marginTop: 4 }
});