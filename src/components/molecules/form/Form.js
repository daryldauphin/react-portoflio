import React from 'react'
import CustomTextField from '../../atoms/TextField/TextField'
import CustomButton from '../../atoms/Button/Button'


const Form = () =>{
return (
<form style={{ width: '100%' }} noValidate autoComplete="off">
  <CustomTextField  label="First Name"/>
  <CustomTextField label="Last Name"/>
  <CustomTextField label="Email"/>
<CustomButton />
</form>

)

}
export default Form;