import {
  SectionContainer,
  SectionWrapper,
  SectionTitle,
} from './SectionStyles';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Section;
