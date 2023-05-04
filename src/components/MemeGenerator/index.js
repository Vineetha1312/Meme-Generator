import {Component} from 'react'
import {
  MemeCardSection,
  BgContainer,
  Heading,
  CardContainer,
  Label,
  InputElement,
  SelectElement,
  Button,
  BgImage,
  Text,
  Card,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isMemeGenerated: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerate = () => {
    this.setState({isMemeGenerated: true})
  }

  memeCard = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <BgImage data-testid="meme" imageUrl={imageUrl}>
        <Text fontSize={fontSize}>{topText}</Text>
        <Text fontSize={fontSize}>{bottomText}</Text>
      </BgImage>
    )
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      isMemeGenerated,
    } = this.state
    return (
      <BgContainer>
        <MemeCardSection>
          <Card>
            <Heading>Meme Generator</Heading>
            <CardContainer>
              <Label htmlFor="imageUrl">Image URL</Label>
              <InputElement
                type="url"
                id="imageUrl"
                placeholder="Enter the Image URL"
                onChange={this.onChangeImageUrl}
                value={imageUrl}
              />
            </CardContainer>
            <CardContainer>
              <Label htmlFor="topText">Top Text</Label>
              <InputElement
                type="text"
                id="topText"
                placeholder="Enter the Top Text"
                onChange={this.onChangeTopText}
                value={topText}
              />
            </CardContainer>
            <CardContainer>
              <Label htmlFor="bottomText">Bottom Text</Label>
              <InputElement
                type="text"
                id="bottomText"
                placeholder="Enter the Bottom Text"
                onChange={this.onChangeBottomText}
                value={bottomText}
              />
            </CardContainer>
            <CardContainer>
              <Label htmlFor="selectItem">Font Size</Label>
              <SelectElement
                onChange={this.onChangeFontSize}
                value={fontSize}
                id="selectItem"
              >
                {fontSizesOptionsList.map(eachItem => (
                  <option key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </SelectElement>
            </CardContainer>
            <CardContainer>
              <Button onClick={this.onClickGenerate}>Generate</Button>
            </CardContainer>
          </Card>
          {isMemeGenerated && this.memeCard()}
        </MemeCardSection>
      </BgContainer>
    )
  }
}

export default MemeGenerator
