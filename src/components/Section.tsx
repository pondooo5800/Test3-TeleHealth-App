import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
    <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.fontKanit]}>{title}</Text>
        {children}
    </View>
);

const styles = StyleSheet.create({
    fontKanit: {
        fontFamily: 'Kanit-Regular',
    },
    section: {
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default Section;