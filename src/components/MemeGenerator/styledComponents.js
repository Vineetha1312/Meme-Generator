import styled from 'styled-components'

export const MemeCardSection = styled.div`
  display: flex;
  flex-direction: row;
`
export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
  font-size: 30px;
`
export const CardContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const Label = styled.label`
  font-size: 12px;
  color: #7e858e;
  font-family: 'Open Sans';
`
export const InputElement = styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #1e293b;
  font-family: 'Open Sans';
  width: 250px;
  padding: 5px;
  margin-top: 5px;
  font-size: 12px;
`
export const SelectElement = styled.select`
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  color: #1e293b;
  font-family: 'Open Sans';
  width: 250px;
  padding: 5px;
  margin-top: 5px;
  font-size: 12px;
`
export const Button = styled.button`
  color: #ffffff;
  font-size: 12px;
  font-family: 'Open Sans';
  background-color: #0b69ff;
  border-radius: 5px;
  height: 30px;
  width: 100px;
  margin-left: 0px;
  margin-right: 150px;
  border: none;
`
export const BgImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  height: 250px;
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-left: 40px;
  padding: 20px;
  justify-content: space-between;
`
export const Text = styled.p`
  font-size: ${props => props.fontSize};
  font-family: 'Open Sans';
  color: #ffffff;
  align-self: flex-start;
`
