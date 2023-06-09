import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Input} from '../../atoms'

let CariForm = (props) => {
    const {handleSubmit, submitting} = props
    return (
        <form role='search' onSubmit={handleSubmit}>
            <div className="mb-3">
                <Field name="cari" type='text' component="input" placeholder='Nomor Order' className="form-control" />
            </div>
            <Button
                className="btn btn-primary float-end"
                type="submit"
                children="Cari"
                disabled={submitting}
            />
        </form>
    )
}

export default reduxForm({
    form: 'CariForm'
})(CariForm)