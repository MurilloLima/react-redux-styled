import React, { Component } from 'react';
import Buttonblack from '../../components/buttons/Buttonblack';
import ButtonWhite from '../../components/buttons/ButtonWhite';
import H1 from '../../components/text/H1';
import './styles.css';
import api from '../../services/api';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const response = await api.get('murillolima');
        console.log(response)
        this.setState({ users: response.data });
    }

    render() {
        const { users } = this.state;
        return (
            <div className="user-info">
                <form>
                    <img src={users.avatar_url} alt="{users.name}"></img>
                    <H1>{users.name}</H1>
                    <p>{users.company}</p>
                    <Buttonblack onClick={() => alert('follow!')}>follow {users.name}</Buttonblack>
                    <ButtonWhite onClick={() => alert('message!')}>message</ButtonWhite>
                </form>
            </div>
        );
    }
}
