import styled from 'styled-components';

interface IWrapper {
  height: number;
}
export const Wrapper = styled.div<IWrapper>`
  font: normal normal 400 12px / normal dotum, sans-serif;
  width: ${({ height }) => height}px;
  height: ${({ height }) => height}px;
  color: #333;
  position: relative;
`;

export const Middle = styled.div`
  overflow: hidden;
  padding: 7px 11px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 2px 2px;
  background-color: rgb(249, 249, 249);
`;

export const Right = styled.div`
  float: right;
  position: relative;
  top: 1px;
  font-size: 11px;
`;

export const RoadView = styled.a`
  float: left;
  height: 15px;
  padding-top: 1px;
  line-height: 15px;
  color: #000;
  text-decoration: none;
`;

export const RoadFind = styled.a`
  float: left;
  height: 15px;
  padding-top: 1px;
  line-height: 15px;
  color: #000;
  text-decoration: none;
`;

export const RoadBig = styled.a`
  float: left;
  height: 15px;
  padding-top: 1px;
  line-height: 15px;
  color: #000;
  text-decoration: none;
`;

export const Span = styled.span`
  width: 1px;
  padding: 0;
  margin: 0 8px 0 9px;
  height: 11px;
  vertical-align: top;
  position: relative;
  top: 2px;
  border-left: 1px solid #d0d0d0;
  float: left;
`;
