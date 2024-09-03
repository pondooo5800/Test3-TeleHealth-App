import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip-card';
import { mockUserData } from '../mocks/mockUserData';

const ProfileCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <FlipCard
            style={styles.cardContainer}
            friction={6}
            perspective={1000}
            flipHorizontal={true}
            flipVertical={false}
            flip={isFlipped}
            clickable={false}
        >
            <View style={styles.profileContainer}>
                <View style={styles.profileHeader}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.hnText, styles.fontKanit]}>HN : {mockUserData.hn}</Text>
                        <Text style={[styles.nameLabel, styles.fontKanit]}>ชื่อ - นามสกุล</Text>
                        <Text style={[styles.nameText, styles.fontKanit]}>{mockUserData.fullName}</Text>
                        <Text style={[styles.idLabel, styles.fontKanit]}>เลขบัตรประจำตัวประชาชน</Text>
                        <Text style={[styles.idText, styles.fontKanit]}>{mockUserData.citizenId}</Text>
                        <Text style={[styles.insuranceText, styles.fontKanit]}>{mockUserData.insuranceStatus}</Text>
                    </View>
                    <Image
                        source={require('../assets/Profile.png')}
                        style={styles.profileImage}
                    />
                </View>
                <View style={styles.footerRow}>
                    <Image
                        source={require('../assets/logo.jpg')}
                        style={styles.insuranceLogo}
                    />
                    <TouchableOpacity style={styles.moreInfoButton} onPress={handleFlip}>
                        <Text style={[styles.moreInfoText, styles.fontKanit]}>ดูข้อมูลเพิ่มเติม {">"}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.profileContainer}>
                <Text style={[styles.backSideLabel, styles.fontKanit]}>โรคประจำตัว</Text>
                <Text style={[styles.backSideText, styles.fontKanit]}>{mockUserData.fullName}</Text>
                <Text style={[styles.backSideLabel, styles.fontKanit]}>ประวัติแพ้ยา</Text>
                <Text style={[styles.backSideText, styles.fontKanit]}>{mockUserData.drugAllergy}</Text>
                <Text style={[styles.backSideLabel, styles.fontKanit]}>{mockUserData.chronicDiseases}</Text>
                <Text style={[styles.backSideUpdate, styles.fontKanit]}>{mockUserData.updatedBy}</Text>
                <TouchableOpacity style={styles.moreInfoButton} onPress={handleFlip}>
                    <Text style={[styles.moreInfoText, styles.fontKanit]}>กลับ  {">"}</Text>
                </TouchableOpacity>
            </View>
        </FlipCard>
    );
};

export default ProfileCard;

const styles = StyleSheet.create({
    fontKanit: {
        fontFamily: 'Kanit-Regular',
    },
    cardContainer: {
        marginBottom: 16,
    },
    profileContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        marginTop: 30,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    hnText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    nameLabel: {
        fontSize: 12,
        color: '#666',
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    idLabel: {
        fontSize: 12,
        color: '#666',
    },
    idText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    insuranceText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 30,
        marginLeft: 15,
        marginTop: -50,
    },
    footerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    insuranceLogo: {
        width: 30,
        height: 30,
    },
    moreInfoButton: {
        marginLeft: 'auto',
    },
    moreInfoText: {
        color: '#3c6ce7',
        fontSize: 14,
        fontWeight: 'bold',
    },
    backSideLabel: {
        color: '#464646',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    backSideText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    backSideUpdate: {
        fontSize: 14,
        color: '#CFCFCF',
        marginTop: 10,
        fontWeight: 'bold',
    },
});
