import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokemonCard({id, name, image, types}) {
  return (
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardMedia
        sx={{ 
          height: 150,
          width: '100%',
          objectFit: 'contain',
          backgroundColor: '#f5f5f5'
        }}
        image={image}
        title={name}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {id>=10 ? "#0"+id : "#00"+id}
        </Typography>
        <Typography>
          {types[0]} {types[1] ? types[1] : null}
        </Typography>
      </CardContent>
    </Card>
  );
}