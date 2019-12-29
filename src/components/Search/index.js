import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from './styles';
import { searchRequest } from '../../store/modules/User/actions';

export default function({ row }) {
    const user = useSelector(state => state.User.user);
    // const repos = useSelector(state => state.User.repos);

    const dispatch = useDispatch();

    const [login, setLogin] = useState(row ? user.login : '');

    const handleInputChange = e => {
        setLogin(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        dispatch(searchRequest(login));
    };

    return (
        <Container row={row}>
            <h1>
                Github <span>Search</span>
            </h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter with your github username"
                    value={login}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </Form>
        </Container>
    );
}
