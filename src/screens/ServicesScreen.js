import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { COURSES } from '../data/coursesData';
import CourseCard from '../components/CourseCard';

export default function ServicesScreen() {
    const [filter, setFilter] = useState('All');
    const [selectedIds, setSelectedIds] = useState([]);

    const filteredCourses = filter === 'All' 
        ? COURSES 
        : COURSES.filter(c => c.category === filter);

    const toggleSelectCourse = (course) => {
        if (selectedIds.includes(course.id)) {
            setSelectedIds(selectedIds.filter(id => id !== course.id));
        } else {
            setSelectedIds([...selectedIds, course.id]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Explore Our Courses</Text>
            
            <View style={styles.filterContainer}>
                {['All', 'Professional Programme', 'Short Course'].map((cat) => (
                    <TouchableOpacity 
                        key={cat} 
                        style={[styles.filterBtn, filter === cat && styles.activeFilter]}
                        onPress={() => setFilter(cat)}
                    >
                        <Text style={[styles.filterText, filter === cat && styles.activeFilterText]}>
                            {cat === 'All' ? 'All Courses' : cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={filteredCourses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CourseCard 
                        course={item} 
                        onSelect={toggleSelectCourse} 
                        isSelected={selectedIds.includes(item.id)}
                    />
                )}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#285062', marginBottom: 15, textAlign: 'center' },
    filterContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 15, flexWrap: 'wrap', gap: 6 },
    filterBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, backgroundColor: '#e2e8f0' },
    activeFilter: { backgroundColor: '#DA6F43' },
    filterText: { fontSize: 12, color: '#4a5568', fontWeight: '600' },
    activeFilterText: { color: '#ffffff' },
    list: { paddingBottom: 20 }
});