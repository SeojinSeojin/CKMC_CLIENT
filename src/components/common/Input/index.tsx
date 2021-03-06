import React, { useEffect, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import useResponsive from '../../../hooks/useResponsive';

interface IInput {
  maxLength: number;
  preValue: string;
  placeholder: string;
  counterBottom: number;
  styledInput: StyledComponent<'input', any, {}, never>;
}

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  & > input {
    width: 100%;
  }
`;

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ maxLength, placeholder, preValue, counterBottom, styledInput: StyledInput }: IInput, ref) => {
    const [value, setValue] = useState(preValue);
    useEffect(() => {}, []);
    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target?.value;
      if (newValue.length > maxLength) return;
      setValue(newValue);
    };
    const { isGuestSmall } = useResponsive();
    return (
      <StyledWrapper>
        <StyledInput
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={updateValue}
          ref={ref}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            color: '#8EAEC9',
            paddingBottom: isGuestSmall ? 22 : counterBottom,
            fontSize: isGuestSmall ? '10px' : '13px',
          }}
        >
          {value.length} / {maxLength}
        </div>
      </StyledWrapper>
    );
  },
);

export default Input;
