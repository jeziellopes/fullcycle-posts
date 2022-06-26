import { IconButton, SvgIcon, SvgIconProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

type Props = {
  color: SvgIconProps['color']
  onClick: () => void
}

export const HomeButton = ({ color, onClick }: Props) => {
  return (
    <IconButton
      onClick={onClick}
      sx={(theme: Theme) => ({
        background: theme.palette.secondary.main,
        position: 'absolute',
        left: -50,
        top: 16
      })}
    >
      <SvgIcon color={color}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </IconButton>
  );
};