import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { COURSES } from '../data/coursesData';

export default function CalculatorScreen() {
    const [selectedIds, setSelectedIds] = useState([]);
    const [clientName, setClientName] = useState('');

    const toggleSelection = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(item => item !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const selectedCourses = COURSES.filter(c => selectedIds.includes(c.id));
    const subtotal = selectedCourses.reduce((sum, item) => sum + item.fee, 0);

    let discountPercent = 0;
    if (selectedCourses.length === 2) discountPercent = 5;
    else if (selectedCourses.length === 3) discountPercent = 10;
    else if (selectedCourses.length > 3) discountPercent = 15;

    const discountAmount = subtotal * (discountPercent / 100);
    const discountedSubtotal = subtotal - discountAmount;
    const vat = discountedSubtotal * 0.15; // 15% VAT calculation[cite: 1, 6]
    const total = discountedSubtotal + vat;

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Interactive Fee Calculator</Text>
            
            <TextInput 
                style={styles.input}
                placeholder="Enter Your Full Name"
                value={clientName}
                onChangeText={setClientName}
            />

            <Text style={styles.sectionLabel}>Select Courses to Package:</Text>
            {COURSES.map(course => {
                const isSelected = selectedIds.includes(course.id);
                return (
                    <TouchableOpacity 
                        key={course.id} 
                        style={[styles.checkboxRow, isSelected && styles.checkedRow]}
                        onPress={() => toggleSelection(course.id)}
                    >
                        <Text style={[styles.checkText, isSelected && styles.checkedText]}>
                            {isSelected ? '☑ ' : '☐ '} {course.name} - R{course.fee}
                        </Text>
                    </TouchableOpacity>
                );
            })}

            <View style={styles.summaryCard}>
                <Text style={styles.summaryHeader}>Investment Summary</Text>
                <Text style={styles.rowText}>Subtotal: R{subtotal.toFixed(2)}</Text>
                <Text style={styles.rowText}>Multi-Course Discount ({discountPercent}%): -R{discountAmount.toFixed(2)}</Text>
                <Text style={styles.rowText}>VAT (15%): R{vat.toFixed(2)}</Text>
                <View style={styles.divider} />
                <Text style={styles.totalText}>Final Total: R{total.toFixed(2)}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#285062', marginBottom: 15, textAlign: 'center' },
    input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#cbd5e1', padding: 12, borderRadius: 8, marginBottom: 15 },
    sectionLabel: { fontSize: 14, fontWeight: 'bold', color: '#285062', marginBottom: 10 },
    checkboxRow: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 8, borderWidth: 1, borderColor: '#e2e8f0' },
    checkedRow: { borderColor: '#268D81', backgroundColor: '#f0fdfa' },
    checkText: { fontSize: 14, color: '#334155' },
    checkedText: { fontWeight: 'bold', color: '#268D81' },
    summaryCard: { backgroundColor: '#285062', borderRadius: 12, padding: 16, marginTop: 20, marginBottom: 30 },
    summaryHeader: { color: '#DA6F43', fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
    rowText: { color: '#ffffff', fontSize: 14, marginBottom: 6 },
    divider: { height: 1, backgroundColor: '#475569', marginVertical: 10 },
    totalText: { color: '#ffffff', fontSize: 20, fontWeight: 'bold' }
});