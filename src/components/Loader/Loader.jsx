import { Box } from 'components/Box';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <RotatingLines
        strokeColor="orangered"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    </Box>
  );
};
