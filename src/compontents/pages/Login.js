import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CustomeInput } from '../CustomeInput';

 export  const  Login = () => {
  return (
    <Form className='login-page'>
        <h2> Register</h2>
        <hr/>
      <CustomeInput/>
      <CustomeInput/>
      <CustomeInput/>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

