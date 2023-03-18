import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/utils.Statistics';
import {Label, Percentage, StatisticItem, StatisticList, Title, Wrapper} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
    {title && <Title>{title}</Title>}
    <StatisticList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </StatisticItem>))}
    </StatisticList>
  </Wrapper>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }),
};