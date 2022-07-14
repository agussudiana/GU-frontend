import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useAnomalyContext } from "../../hooks/useAnomalyContext";

type Props = {
  value: any;
};
export const AnomalyItem = ({ value }: Props) => {
  const { setAnomaly } = useAnomalyContext();
  const handleClick = () => {
    setAnomaly(value);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
