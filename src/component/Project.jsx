import React from "react";
import projects from "../data/project.json";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function Project() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 8 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 6,
          fontWeight: "bold",
          color: "text.secondary",
          borderBottom: "3px solid",
          borderColor: "text.secondary",
          display: "inline-block",
          px: 3,
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={4} maxWidth="lg" mx="auto">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 4,
                  transition: "all 0.3s ease",
                  "&:hover": { boxShadow: 8, transform: "translateY(-5px)" },
                }}
              >
                <CardActionArea
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: "100%" }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.name}
                    sx={{
                      height: 180,
                      objectFit: "cover",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {project.name}
                    </Typography>
                    {project.description && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                    )}
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                      flexWrap="wrap"
                    >
                      <Chip
                        label={`Framework: ${project.framework}`}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontStyle: "italic" }}
                      >
                        📅 {project.createdAt}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography align="center" color="text.secondary" variant="body1">
              No projects found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Project;
