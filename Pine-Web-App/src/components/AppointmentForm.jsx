import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    useColorModeValue,
    useBreakpointValue,
    useToast,
    Select,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react';

import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        doctor: '',
        date: new Date(),
        time: new Date().toLocaleTimeString()
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        doctor: '',
        date: '',
        time: ''
    });

    const toast = useToast();

    const handleSubmit = (values, actions) => {
        // Make API call to book appointment here
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            doctor: '',
            date: new Date(),
            time: new Date().toLocaleTimeString()
        });
        actions.setSubmitting(false);
        toast({
            title: 'Appointment booked',
            description: 'Your appointment has been successfully booked.',
            status: 'success',
            duration: 3000,
            isClosable: true
        });
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number is invalid')
            .required('Phone number is required'),
        message: Yup.string().required('Message is required'),
        doctor: Yup.string().required('Doctor is required'),
        date: Yup.date().required('Date is required'),
        time: Yup.string().required('Time is required')
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            date: date
        });
    };

    const handleTimeChange = (time) => {
        setFormData({
            ...formData,
            time: time.toLocaleTimeString()
        });
    };

    const formBgColor = useColorModeValue('white', 'gray.800');
    const formBorderColor = useColorModeValue('gray.200', 'gray.600');
    const textSize = useBreakpointValue({ base: 'lg', md: 'xl' });

    const doctors = [
        'Dr. John Doe',
        'Dr. Jane Smith',
        'Dr. Bob Johnson',
        'Dr. Sally Thompson'
    ];

    return (
        <Box w="100%"  borderColor={formBorderColor}>
            <Heading mb={2} fontSize={textSize}>Book Appointment</Heading>
            <Formik
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                {({ isSubmitting }) => (
                    <Form className=' w-full'>
                        <Stack spacing="4">
                            <Field name="name">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor="name">Name</FormLabel>
                                        <Input {...field} id="name" placeholder="Enter your name" />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="email">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <FormLabel htmlFor="email">Email</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<AiOutlineMail color='gray.300' />}
                                            />
                                            <Input {...field} id="email" type='email' placeholder="Enter your email" />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="phone">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                                        <FormLabel htmlFor="phone">Phone</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents='none'
                                                children={<AiFillPhone color='gray.300' />}
                                            />
                                            <Input {...field} id="phone" type='tel' placeholder="Enter your phone number" />
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="message">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.message && form.touched.message}>
                                        <FormLabel htmlFor="message">Message</FormLabel>
                                        <Textarea {...field} id="message" placeholder="Enter your message" />
                                        <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="department">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.department && form.touched.department}>
                                        <FormLabel htmlFor="department">Department</FormLabel>
                                        <Select {...field} id="department" placeholder="Select department">
                                            {doctors.map((doctor) => (
                                                <option key={doctor} value={doctor}>
                                                    {doctor}
                                                </option>
                                            ))}
                                        </Select>
                                        <FormErrorMessage>{form.errors.doctor}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="doctor">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.doctor && form.touched.doctor}>
                                        <FormLabel htmlFor="doctor">Doctor</FormLabel>
                                        <Select {...field} id="doctor" placeholder="Select doctor">
                                            {doctors.map((doctor) => (
                                                <option key={doctor} value={doctor}>
                                                    {doctor}
                                                </option>
                                            ))}
                                        </Select>
                                        <FormErrorMessage>{form.errors.doctor}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name="date">
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.date && form.touched.date}>
                                        <FormLabel htmlFor="date">Date</FormLabel>
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            type="datetime-local"
                                        />
                                        <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                type="submit"
                                isLoading={isSubmitting}
                                loadingText="Booking appointment..."
                                colorScheme="blue"
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default AppointmentForm;
