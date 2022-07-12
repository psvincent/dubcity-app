import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, FormGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import alienAvatar from '../assets/avatar/alien-avatar.jpg';
import bearAvatar from '../assets/avatar/bear-avatar.png';
import doggoAvatar from '../assets/avatar/doggo-avatar.png';
import ghostAvatar from '../assets/avatar/ghost-avatar.png';
import gorillaAvatar from '../assets/avatar/gorilla-avatar.jpg';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';


import Auth from '../utils/auth';
import { FormRow } from 'react-bootstrap/Form';


const SignupForm = () => {
  const gamesArray = [
    'Onward',
    'Contractors',
    'Pavlov'
  ];

  // Create avatar path object
  const avatarOpt = [
    { value: alienAvatar, alt: 'Alien Avatar' },
    { value: bearAvatar, alt: 'Bear Avatar' },
    { value: doggoAvatar, alt: 'Doggo Avatar' },
    { value: ghostAvatar, alt: 'Ghost Avatar' },
    { value: gorillaAvatar, alt: 'Gorilla Avatar' }
  ];

  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: ''
  });

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  const [selectedValue,setValue]=useState('');

  // OnChange for avatar selector
  const handleSelectChange = (event) =>{
    console.log(event)
    setValue(event)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your username"
            name="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type="invalid">
            Username is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email address"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>

        <FormGroup>
          <DropdownButton 
            title="Select Avatar"
            id="bg-nested-dropdown"  
            onSelect={handleSelectChange}
            value={userFormData.avatar = selectedValue}>

              {avatarOpt.map(option => (
                <Dropdown.Item 
                  key={option.value} 
                  eventKey={option.value}>
                    <img 
                      src={option.value} 
                      alt={option.alt} 
                      className='avatarImage'/>
                </Dropdown.Item>
              ))}
          </DropdownButton>
        </FormGroup>

        {/* <Form.Group>
          <Form.Label htmlFor="avatarOptions">Select an avatar</Form.Label>
          {['radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                name="avatarOptions"
                type={type}
                id={`default-${type}`}
                label={<img src={alienAvatar} alt='alien' className='avatarImage'/>}
                checked={true}
              />
              <Form.Check
                name="avatarOptions"
                type={type}
                id={`default-${type}`}
                label={<img src={doggoAvatar} alt='doggo' className='avatarImage'/>}
                //value="no"
                //checked={selected === "no"}
              />
              <Form.Check
                name="avatarOptions"
                type={type}
                id={`default-${type}`}
                label={<img src={ghostAvatar} alt='ghost' className='avatarImage'/>}
                //value="no"
                //checked={selected === "no"}
              />
              <Form.Check
                name="avatarOptions"
                type={type}
                id={`default-${type}`}
                label={<img src={gorillaAvatar} alt='gorilla' className='avatarImage'/>}
                //value="no"
                //checked={selected === "no"}
              />
              <Form.Check
                name="avatarOptions"
                type={type}
                id={`default-${type}`}
                label={<img src={bearAvatar} alt='bear' className='avatarImage'/>}
                //value="no"
                //checked={selected === "no"}
              />
            </div>

          ))}
        </Form.Group> */}

        <Form.Group>
          <Form.Label htmlFor="gameOptions">Which games do you play?</Form.Label>
          {['checkbox'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              {gamesArray.map((game) => {
                return (
                  <Form.Check
                    name="gameOptions"
                    key={`${game}`}
                    type={type}
                    className={`default-${type}`}
                    label={`${game}`}
                  />
                )
              })}
            </div>
          ))}
        </Form.Group>

        <Button
          disabled={
            !(
              userFormData.username &&
              userFormData.email &&
              userFormData.password
            )
          }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;