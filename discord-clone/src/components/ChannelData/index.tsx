import React, { useRef, useEffect } from 'react';

import {
    Container,
    Messages,
    InputWrapper,
    Input,
    InputIcon
} from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if ( div ) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);
  
  return (
      <Container>
          <Messages ref={messagesRef}>
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="Don't make me destroy you"
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="Join me, and I will complete your training."
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="With our combined strength, we can end this destructive conflict, and bring order to the galaxy"
            />
            <ChannelMessage
              author="Luke Skywalker"
              date="22/10/2020"
              content="I'll never join you!"
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="If you only knew the power of the dark side! Obi Wan never told you what happened to your father"
            />
            <ChannelMessage
              author="Luke Skywalker"
              date="22/10/2020"
              content="He told me enough. He told me that you killed him."
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="No. I am your father!"
            />
            <ChannelMessage
              author="Luke Skywalker"
              date="22/10/2020"
              content="No, no, no. It's not true!!"
            />
            <ChannelMessage
              author="Luke Skywalker"
              date="22/10/2020"
              content="That's impossible!!!!!"
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="Step your feelings. You know that's the truth."
            />
            <ChannelMessage
              author="Luke Skywalker"
              date="22/10/2020"
              content="NOOOOOOOOOOOOO!!!!! NOOOOOOOOOOOOOOOOO!!"
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content="Luke, you can destroy the emperor. It's your destiny, join me!"
            />
            <ChannelMessage
              author="Darth Vader"
              date="22/10/2020"
              content={
                <>
                  <Mention>@Darth Vader</Mention>, stop the bullshit
                </>
              }
              hasMention
              isBot
            />
          </Messages>
          <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon />
          </InputWrapper>
      </Container>
  );
}

export default ChannelData;