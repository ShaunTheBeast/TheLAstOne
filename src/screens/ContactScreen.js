import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function ContactScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!name || !email || message.length < 10) {
            Alert.alert("Validation Error", "Please fill in all required fields. Messages must be at least 10 characters long.");
            return;
        }
        Alert.alert("Success!", `Thank you, ${name}. Your inquiry has been sent to our Durban admissions team[cite: 1, 6].`);
        setName(''); setEmail(''); setPhone(''); setMessage('');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Contact Admissions</Text>
            <Text style={styles.subtitle}>Durban, South Africa • Mon–Fri: 8am to 6pm[cite: 1, 6]</Text>

            <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <TextInput style={styles.input} placeholder="Phone Number (e.g. +27...)" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
            <TextInput style={[styles.input, styles.textArea]} placeholder="Your Message (min 10 characters)" value={message} onChangeText={setMessage} multiline numberOfLines={4} />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Send Inquiry</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#285062', textAlign: 'center', marginBottom: 5 },
    subtitle: { fontSize: 12, color: '#64748b', textAlign: 'center', marginBottom: 20 },
    input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#cbd5e1', padding: 12, borderRadius: 8, marginBottom: 12 },
    textArea: { height: 100, textAlignVertical: 'top' },
    button: { backgroundColor: '#DA6F43', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});