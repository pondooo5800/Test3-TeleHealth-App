import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Section from '../components/Section';
import SectionItem from '../components/SectionItem';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileCardContainer}>
                <ProfileCard />
            </View>

            <Section title="บัญชีผู้ใช้">
                <SectionItem title="ข้อมูลผู้ใช้" subtitle="ข้อมูลผู้ใช้ และข้อมูลสุขภาพ" icon="user" onPress={() => { }} />
                <SectionItem title="ผลตรวจสุขภาพ" icon="calendar-plus" subtitle="ผลตรวจสุขภาพจากหน่วยบริการ" onPress={() => { }} />
                <SectionItem title="กิจกรรม" icon="notes-medical" subtitle="การปรึกษา และการจ่ายยา" onPress={() => { }} />
                <SectionItem title="ที่อยู่" icon="map-marker-alt" subtitle="สถานที่รับยา" onPress={() => { }} />
                <SectionItem title="การชำระเงิน" icon="credit-card" subtitle="ตั้งค่าช่องทางการชำระเงิน" onPress={() => { }} />
                <SectionItem title="สิทธิประโยชน์ของฉัน" icon="hand-holding-medical" subtitle="ประกัน และสิทธิประโยชน์" onPress={() => { }} />
                <SectionItem title="คูปองของฉัน" icon="ticket-alt" subtitle="คูปองส่วนลด และE-voucher service" onPress={() => { }} />
            </Section>
            <Section title="เชื่อมต่อข้อมูลสุขภาพ">
                <SectionItem title="อุปกรณ์สุขภาพ" subtitle="บันทึกข้อมูลสุขภาพ" icon="watch"
                    iconType="Feather" onPress={() => { }} />
            </Section>
            <Section title="ตั้งค่า">
                <SectionItem title="บัญชีและความปลอดภัย" subtitle="การเข้าถึง และรหัสผ่าน" icon="shield-alt" onPress={() => { }} />
                <SectionItem title="ตั้งค่าการแจ้งเตือน" subtitle="การแจ้งเตือนของแอปพลิเคชัน" icon="bell" onPress={() => { }} />
                <SectionItem title="ตั้งค่าภาษา" subtitle="เปลี่ยนภาษาแอปพลิเคชัน" icon="language" onPress={() => { }} />
            </Section>
            <Section title="ศูนย์ช่วยเหลือ">
                <SectionItem title="ข้อกำหนดและเงื่อนไข" subtitle="ข้อกำหนดและเงื่อนไขการใช้บริการ" icon="clipboard-list" onPress={() => { }} />
                <SectionItem title="ติดต่อเรา" subtitle="ติดต่อสอบถามต่างๆ" icon="comment-alt" onPress={() => { }} />
                <SectionItem title="TeleHealth Thailand" subtitle="v7.07.23.5.78.3" icon="code" onPress={() => { }} />
            </Section>

            <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
                <Text style={styles.logoutButtonText}>ออกจากระบบ</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    fontKanit: {
        fontFamily: 'Kanit-Regular',
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#F4F8FF',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    profileCardContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#3c6ce7',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Kanit-Regular',
    },
});
