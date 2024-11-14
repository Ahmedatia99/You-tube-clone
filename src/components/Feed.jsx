import { Stack, Box, Typography } from "@mui/material";
import { SliderBar ,Videos } from "./";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "colum", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "calc(100vh - 78px)" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        |<SliderBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff" }}
        >
          Copyright 2024 A3
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{ overflow: "auto", height: "calc(100vh - 78px)", flex: 2 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          New <span style={{ color: "#f31503" }}>videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  );
};

export default Feed;
