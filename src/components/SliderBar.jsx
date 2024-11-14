import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
const SliderBar = () => {
  const selected = "New";
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "92%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((el) => {
        return (
          <button
            className="category-btn"
            key={el.id}
            style={{
              background: el.name == selected && "#FC1503",
              color: "#fff",
            }}
          >
            <span
              style={{
                color: el.name == selected ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {el.icon}
            </span>
            <span style={{ opacity: el.name == selected ? "1" : "0.8" }}>
              {el.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default SliderBar;
