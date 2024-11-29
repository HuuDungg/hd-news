import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { User, MapPin, Mail, Lock, Calendar } from 'lucide-react-native';

// Define interface for form values
interface ProfileValues {
  fullName: string;
  email: string;
  address: string;
  password: string;
  birthDate: Date;
}

const EditProfilePage = () => {
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  // Validation schema
  const ProfileValidationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Full Name is Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required'),
    address: Yup.string()
      .min(5, 'Address is too short')
      .required('Address is Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must include uppercase, lowercase, number, and special character'
      )
      .required('Password is Required'),
    birthDate: Yup.date()
      .max(new Date(), 'Birth date cannot be in the future')
      .required('Birth Date is Required'),
  });

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(Platform.OS === 'ios');
    setBirthDate(currentDate);
  };

  const handleSubmit = (
    values: ProfileValues, 
    { setSubmitting }: FormikHelpers<ProfileValues>
  ) => {
    console.log('Form Values:', { 
      ...values, 
      gender,
      birthDate: birthDate.toISOString().split('T')[0]
    });
    setSubmitting(false);
    // Implement your submit logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.formSection}>
        <Text style={styles.pageTitle}>Edit Profile</Text>
        
        <Formik<ProfileValues>
          initialValues={{
            fullName: '',
            email: '',
            address: '',
            password: '',
            birthDate: new Date(),
          }}
          validationSchema={ProfileValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ 
            handleChange, 
            handleBlur, 
            handleSubmit, 
            values, 
            errors, 
            touched,
            isSubmitting 
          }) => (
            <View>
              {/* Full Name Input */}
              <View style={styles.inputContainer}>
                <User color="#333" size={20} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
              </View>
              {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}

              {/* Email Input */}
              <View style={styles.inputContainer}>
                <Mail color="#333" size={20} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* Address Input */}
              <View style={styles.inputContainer}>
                <MapPin color="#333" size={20} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                />
              </View>
              {touched.address && errors.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <Lock color="#333" size={20} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {/* Birth Date Input */}
              <View style={styles.inputContainer}>
                <Calendar color="#333" size={20} style={styles.inputIcon} />
                <TouchableOpacity 
                  style={styles.datePickerTouchable}
                  onPress={() => setShowDatePicker(true)}
                >
                  <Text style={styles.input}>
                    {birthDate.toLocaleDateString()}
                  </Text>
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={birthDate}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={handleDateChange}
                  maximumDate={new Date()}
                />
              )}

              {/* Gender Selection */}
              <View style={styles.genderContainer}>
                <Text style={styles.genderLabel}>Gender:</Text>
                <View style={styles.genderButtonContainer}>
                  <TouchableOpacity
                    style={[
                      styles.genderButton,
                      gender === 'male' && styles.selectedGenderButton
                    ]}
                    onPress={() => setGender('male')}
                  >
                    <Text style={[
                      styles.genderButtonText, 
                      gender === 'male' && { color: 'white' }
                    ]}>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.genderButton,
                      gender === 'female' && styles.selectedGenderButton
                    ]}
                    onPress={() => setGender('female')}
                  >
                    <Text style={[
                      styles.genderButtonText, 
                      gender === 'female' && { color: 'white' }
                    ]}>Female</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Submit Button */}
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={() => handleSubmit()}
                disabled={isSubmitting}
              >
                <Text style={styles.submitButtonText}>
                  {isSubmitting ? 'Updating...' : 'Update Profile'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  formSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  datePickerTouchable: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  genderLabel: {
    color: '#333',
    fontSize: 16,
    marginRight: 15,
  },
  genderButtonContainer: {
    flexDirection: 'row',
  },
  genderButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    marginRight: 10,
  },
  selectedGenderButton: {
    backgroundColor: '#333',
  },
  genderButtonText: {
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfilePage;