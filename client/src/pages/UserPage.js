import React from 'react';
import {
    Jumbotron,
    Container,
    Button,
} from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const UserPage = () => {
    const { loading, data } = useQuery(QUERY_ME);
    const [removeUser, { error }] = useMutation(REMOVE_USER);

    const userData = data?.me || {};

    const handleDeleteUser = async (_id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const { data } = await removeUser({
                variables: { _id },
            });
            removeUser(_id);
        } catch (err) {
            console.error(err);
        }
    }

    if (loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <>
            <Jumbotron fluid className='user-header'>
                <Container>
                    <h1>Username: {userData.username}</h1>
                    <h1>Email: {userData.email}</h1>
                    <h1>Games: {userData.games}</h1>
                </Container>
            </Jumbotron>
            <Container className='user-body'>
                <Container>
                    <img
                        src={userData.avatar}
                        alt="User's Avatar"
                    />
                </Container>
                <Container className='mt-2'>
                    <Button
                        onClick={() => handleDeleteUser(userData._id)}
                    >
                        Delete My Account!
                    </Button>
                </Container>
            </Container>
        </>
    )
}

export default UserPage;