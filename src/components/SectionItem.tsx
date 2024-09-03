import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface SectionItemProps {
    title: string;
    subtitle?: string;
    icon: string;
    iconType?: 'FontAwesome' | 'Feather';
    onPress: () => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ title, subtitle, icon, iconType = 'FontAwesome', onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
        <View style={styles.leftIconContainer}>
            {iconType === 'FontAwesome' ? (
                <FontAwesomeIcon name={icon} size={24} color="#3c6ce7" />
            ) : (
                <FeatherIcon name={icon} size={24} color="#3c6ce7" />
            )}
        </View>
        <View style={styles.textContainer}>
            <Text style={[styles.itemText, styles.fontKanit]}>{title}</Text>
            {subtitle && <Text style={[styles.subtitleText, styles.fontKanit]}>{subtitle}</Text>}
        </View>
        <View style={styles.rightIconContainer}>
            <FontAwesomeIcon name="chevron-right" size={18} color="#3c6ce7" />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    fontKanit: {
        fontFamily: 'Kanit-Regular',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    leftIconContainer: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    itemText: {
        fontSize: 16,
        marginLeft: 8,
    },
    subtitleText: {
        fontSize: 14,
        marginLeft: 8,
        color: '#666',
    },
    rightIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SectionItem;
