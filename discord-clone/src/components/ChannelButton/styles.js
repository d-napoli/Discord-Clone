import styled, {css} from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color .2s;

  > div {
        display: flex;
        align-items: center;
  }

  > div span {
        margin-left: 5px;
        color: var(--senary);
        font-size: 15px;
  }

  > div svg {
    display: none;
  }

  &:hover, &.active {
      background-color: var(--quinary);
      > div span {
            color: var(--white);
      }

      > div svg {
          display: inline;
      }
  }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    
    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const InviteIcon = styled(PersonAdd)`
    ${iconCSS};
`;


export const SettingsIcon = styled(Settings)`
    margin-left: 4px;
    ${iconCSS};
`;
