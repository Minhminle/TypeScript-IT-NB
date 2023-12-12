import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

const Container_Asian: React.FC = () => {
  return (
    <Box sx={{backgroundColor:'#F8FBDC', color:'black', height:'900px'}}>
      <Box sx={{paddingTop:'60px'}}>
        <Typography variant="h3" sx={{fontSize:'35px', textAlign:'center'}}>Our Delicious and Special Salad 
        </Typography>
        <Typography variant="h3" sx={{color:'#DAE952', fontSize: '35px', fontWeight: 'bolder', textAlign:'center'}}>Asian 
        </Typography>
        <Typography variant="body1" sx={{paddingTop: '20px',fontSize: '20px', textAlign:'center'}}>
        Food is any substance consumed by an organism for nutritional support.
        </Typography>
      </Box>

      <Box mt={4} sx={{marginTop:'75px', marginLeft:'60px', textAlign:'center'}}>
        <Grid container spacing={-3}>
          {/* Hình ảnh 1 */}
          <Grid item xs={6} sm={3}>
          <Card sx={{ borderRadius: "30px", width: '291px', height: '495px'}}>
            <img
              src="/images/1.png"
              alt="Asian Food 1"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" sx={{position:'relative', top:'-30px', fontWeight: 'bolder'}}>Special Salad</Typography>
            <Typography variant="body2" sx={{fontSize:'20px',position:'relative'}}>
            Food is any substance consumed by an organism for nutritional support.        
            </Typography>
            </Card>
          </Grid>

          {/* Hình ảnh 2 */}
          <Grid item xs={6} sm={3}>
          <Card sx={{ borderRadius: "30px", width: '291px', height: '495px' }}>
            <img
              src="/images/2.png"
              alt="Asian Food 2"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" sx={{position:'relative', top:'-30px', fontWeight: 'bolder'}}>Russian Salad</Typography>
            <Typography variant="body2" sx={{fontSize:'20px',position:'relative'}}>
            Food is any substance consumed by an organism for nutritional support.        
            </Typography>
            </Card>
          </Grid>

          {/* Hình ảnh 3 */}
          <Grid item xs={6} sm={3}>
          <Card sx={{ borderRadius: "30px", width: '291px', height: '495px' }}>
            <img
              src="/images/3.png"
              alt="Asian Salad"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" sx={{position:'relative', fontWeight: 'bolder'}}>Ramen Bliss</Typography>
            <Typography variant="body2" sx={{fontSize:'20px',position:'relative', top:'30px'}}>
            Food is any substance consumed by an organism for nutritional support.        
            </Typography>
            </Card>
          </Grid>

          {/* Hình ảnh 4 */}
          <Grid item xs={6} sm={3}>
          <Card sx={{ borderRadius: "30px", width: '291px', height: '495px' }}>
            <img
              src="/images/4.png"
              alt="Asian Food 4"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="h6" sx={{position:'relative', top:'10px', fontWeight: 'bolder'}}>American Salad</Typography>
            <Typography variant="body2" sx={{fontSize:'20px',position:'relative', top:'40px'}}>
            Food is any substance consumed by an organism for nutritional support.        
            </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Container_Asian;
