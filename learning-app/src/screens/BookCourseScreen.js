import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
    MainButton,
    MainButtonText,
    TitleText,
} from '../styles/GlobalStyles.js';
import DropDownPicker from 'react-native-dropdown-picker';
import CourseItem from '../components/CourseItem.jsx';

const BookCourseScreen = ({ navigation }) => {
    const [openCourse, setOpenCourse] = useState(false);
    const [openType, setOpenType] = useState(false);
    const [course, setCourse] = useState(null);
    const [courseType, setCourseType] = useState(null);
    const [courses, setCourses] = useState([
        { label: 'Java', value: 'java' },
        { label: 'JavaScript', value: 'javascript' },
        { label: 'Python', value: 'python' },
    ]);

    const [courseTypes, setCourseTypes] = useState([
        { label: 'Frontend', value: 'frontend' },
        { label: 'Backend', value: 'backend' },
        { label: 'Fullstack', value: 'fullstack' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <View style={styles.blockContainer}>
                    <Text style={styles.label}>Select course</Text>
                    <DropDownPicker
                        open={openCourse}
                        value={course}
                        items={courses}
                        setOpen={setOpenCourse}
                        setValue={setCourse}
                        setItems={setCourses}
                        placeholder="Select"
                        style={styles.dropdown}
                        textStyle={styles.dropdownText}
                        dropDownContainerStyle={styles.dropdownContainer}
                        tickIconStyle={{ tintColor: '#fff' }}
                        arrowIconStyle={{ tintColor: '#fff' }}
                        listItemContainerStyle={styles.listItem}
                        labelStyle={styles.labelStyle}

                    />
                </View>
                <View style={styles.blockContainer}>
                    <Text style={styles.label}>Course Type</Text>
                    <DropDownPicker
                        open={openType}
                        value={courseType}
                        items={courseTypes}
                        setOpen={setOpenType}
                        setValue={setCourseType}
                        setItems={setCourseTypes}
                        placeholder="Select"
                        style={styles.dropdown}
                        textStyle={styles.dropdownText}
                        dropDownContainerStyle={styles.dropdownContainer}
                        tickIconStyle={{ tintColor: '#fff' }}
                        arrowIconStyle={{ tintColor: '#fff' }}
                        listItemContainerStyle={styles.listItem}
                        labelStyle={styles.labelStyle}

                    />
                </View>
            </View>
            <View style={{
                margin: 10,
                flex: 1,
                alignItems: 'center',
                width: '100%',
                height: '60vh',
                overflow: 'auto',
            }}>
                {course ? (
                    <View style={{ justifyContent: 'center', alignItems: 'baseline' }}>
                        <TitleText key={course.value} style={{ alignItems: 'baseline', justifyContent: 'center', marginHorizontal: 20 }}>
                            {courses.find(c => c.value === course)?.label || 'Selected Course'}
                        </TitleText>
                        <View style={styles.courseContainer}>
                            <CourseItem />
                        </View>
                    </View>
                ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'baseline' }}>
                        <TitleText style={{ alignItems: 'baseline', justifyContent: 'center', marginHorizontal: 20 }}>
                            All Courses
                        </TitleText>
                        <View style={styles.courseContainer}>
                            <CourseItem />
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    filterContainer: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    blockContainer: {
        flexDirection: 'column',
        alignItems: 'baseline',
        justifyContent: 'center',
        margin: 10,
    },
    title: {
        fontSize: 30,
    },

    buttonContainer: {
        width: 150,
        height: 40,
        marginHorizontal: 5
    },
    courseContainer: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '60vh',
        overflow: 'auto',

    },
    dropdown: {

        height: 40,
        width: 150,
        minHeight: 40,
        backgroundColor: '#874ECF',
        borderWidth: 0,
        borderRadius: 12,
        marginVertical: 10,
    },
    dropdownText: {
        fontSize: 14,
        color: '#fff',
    },
    dropdownContainer: {
        borderWidth: 0,
        width: 150,
        backgroundColor: '#874ECF',
    },
    listItem: {
        borderWidth: 0.2,
        borderColor: '#fff',
    },
    selected: {
        marginTop: 20,
        fontSize: 16,
        color: '#6200ee',
        height: 20,
    },
    label: {
        color: '#874ECF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    labelStyle: {
        flex: 1,
        textAlign: 'left',
        maxWidth: 120,
        color: '#fff',
        fontSize: 14,
    },
});

export default BookCourseScreen;
