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
            <Jumbotron fluid>
                <Container>
                    <h1>{userData.username}</h1>
                </Container>
            </Jumbotron>
            <Container>
                <Container>
                    <img
                        src={userData.avatar}
                        alt=''
                    />
                    <p>
                        Games: {userData.games}
                    </p>
                </Container>
                <Button
                    onClick={() => handleDeleteUser(userData._id)}
                >
                    Delete My Account!
                </Button>
            </Container>
        </>
    )
}

export default UserPage;