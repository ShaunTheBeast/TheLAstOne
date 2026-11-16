import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CourseCard({ course, onSelect, isSelected }) {
    return (
        <View style={styles.card}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{course.category}</Text>
            </View>
            <Text style={styles.title}>{course.name}</Text>
            <Text style={styles.duration}>{course.duration}</Text>
            <Text style={styles.price}>R{course.fee.toFixed(2)}</Text>
            
            <TouchableOpacity 
                style={[styles.button, isSelected && styles.selectedButton]} 
                onPress={() => onSelect(course)}
            >
                <Text style={styles.buttonText}>
                    {isSelected ? "✓ Added to Quote" : "Add to Quote"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#285062', // Navy brand color
        borderRadius: 14,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    badge: {
        alignSelf: 'flex-start',
        backgroundColor: '#268D81', // Teal accent
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 6,
        marginBottom: 8,
    },
    badgeText: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    title: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    duration: {
        color: '#f8f9fa',
        fontSize: 13,
        opacity: 0.8,
        marginBottom: 8,
    },
    price: {
        color: '#DA6F43', // Terracotta price highlight
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#DA6F43', // Terracotta CTA
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: '#268D81',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    }
});