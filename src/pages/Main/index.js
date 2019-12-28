import React, { Component } from 'react';

import api from '../../services/api';
import { Container, Form } from './styles';

export default class Main extends Component {
    state = {
        user: '',
    };

    handleInputChange = e => {
        this.setState({ user: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { user } = this.state;

        const response = await api.get(`/users/${user}`);

        const { data } = response;

        return console.log(data);
    };

    render() {
        const { user } = this.state;
        return (
            <Container>
                <h1>Github Search</h1>

                <Form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter with your github username"
                        value={user}
                        onChange={this.handleInputChange}
                        onSubmit={this.handleSubmit}
                    />
                </Form>
            </Container>
        );
    }
}
