import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from "react";
import { nanoid } from 'nanoid'

const initialValues = {
        name: '',
        phone: '',
        id: nanoid(),
    }

const ContactForm = ({ addContact }) => {
    
    const nameFieldId = useId();
    const phoneFieldId = useId();

    return (
        
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                addContact({ ...values, id: nanoid() })
                actions.resetForm()
            }}>
            <Form>
                <label htmlFor={nameFieldId}>Name:</label>
                <Field type="text" name='name' id={nameFieldId} />
                <ErrorMessage name='name' component='span' />
                <label htmlFor={phoneFieldId}>Phone:</label>
                <Field type="number" name='phone' id={phoneFieldId} />
                <ErrorMessage name='phone' component='span' />
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm