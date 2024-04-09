"use client";
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ListDivider from '@mui/joy/ListDivider';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function SearchBar() {
  const [radius, setRadius] = React.useState(16);
  const [childHeight, setChildHeight] = React.useState(28);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }} class="w-3/4 md:w-96 justify-center">
      <Input
        size="md"
        placeholder="Find brands in..."
        endDecorator={
          <Button variant="soft" size="sm">
            Search
          </Button>
        }
        sx={{
          '--Input-radius': `${radius}px`,
          '--Input-decoratorChildHeight': `${childHeight}px`,
        }}
      />
    </Box>
  );
}
