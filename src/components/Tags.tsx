
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Tag } from '@/types';

type Props = {
  tags: Tag[]
};

export const Tags = ({tags}: Props) => {
  return (
    <Stack direction="row" spacing={1}>
    {tags.map((tag, key) => 
      <Chip
        key={key}
        label={tag.name}
        sx={{
          backgroundColor: tag.color,
          height: 20,
          fontSize: 10,
          padding: 0.4,
        }}  
      />
    )}
  </Stack>
  );
};
