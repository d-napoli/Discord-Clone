import React from 'react';

import {
    Container,
    Role,
    User,
    Avatar
} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
  return (
      <Container>
          <Role>Disponível - 1</Role>
          <UserRow nickname="Diego Napoli"/>
          <UserRow nickname="Orson Wellers" />
          <UserRow nickname="Sheldon Cooper" isBot />
          <UserRow nickname="Frank Abagnale" />
          <UserRow nickname="Bruce Dickinson" />
          <Role>Offline - 18</Role>
          <UserRow nickname="Homer Simpson" isBot />
          <UserRow nickname="Peter Parker" />
          <UserRow nickname="Ron Weasley" />
          <UserRow nickname="Ex Machine" isBot />
          <UserRow nickname="Don Corleone" />
          <UserRow nickname="Luke Skywalker" />
          <UserRow nickname="Freddie Mercury" />
          <UserRow nickname="Michael Jackson" isBot />
          <UserRow nickname="Harry Osborne" />
          <UserRow nickname="Norman Bates" />
          <UserRow nickname="Bart Simpson" />
          <UserRow nickname="Charlie Harper" />
          <UserRow nickname="Mr Robot" />
          <UserRow nickname="Barry Allen" />
      </Container>
  );
}

export default UserList;