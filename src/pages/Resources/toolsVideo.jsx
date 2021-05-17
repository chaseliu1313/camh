import { VideoLayout } from './toolLayout';
import Heading, { Paragraph } from '../../components/Text/Heading';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { SecondaryColor_Blk } from '../../theme/resource';

const ToolsVideo = (props) => {
  return (
    <>
      <Heading
        size="3vmin"
        weight="bold"
        align="center"
        color={SecondaryColor_Blk}
      >
        {props.title}
      </Heading>
      <VideoLayout>
        {props.videoContent.map((v, i) => (
          <VideoPanel key={i}>
            <ReactPlayer
              url={v.url}
              playing={false}
              controls={true}
              width="90%"
            />
            <Paragraph
              color={SecondaryColor_Blk}
              margin="0.5vmin"
              padding="0"
              size="2vmin"
              weight="bold"
              align="center"
            >
              {v.description}
            </Paragraph>
          </VideoPanel>
        ))}
      </VideoLayout>
    </>
  );
};

const VideoPanel = styled.div`
  height: 100%;
  width: 100%;
  padding: 1vmin 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ToolsVideo;
