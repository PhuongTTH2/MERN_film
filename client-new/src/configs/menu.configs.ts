import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
interface Main {
  display: any,
  path: any,
  icon: any ,
  state: any,
}
const main: Main[] = [
  {
    display: "home",
    path: "/",
    icon: typeof HomeOutlinedIcon,
    state: "home",
  },
  {
    display: "movies",
    path: "/movie",
    icon: typeof SlideshowOutlinedIcon,
    state: "movie"
  },
  {
    display: "tv series",
    path: "/tv",
    icon: typeof LiveTvOutlinedIcon ,
    state: "tv"
  },
  {
    display: "search",
    path: "/search",
    icon: typeof SearchOutlinedIcon ,
    state: "search"
  }
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: typeof FavoriteBorderOutlinedIcon,
    state: "favorite"
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: typeof RateReviewOutlinedIcon ,
    state: "reviews"
  },
  {
    display: "password update",
    path: "/password-update",
    icon: typeof LockResetOutlinedIcon ,
    state: "password.update"
  }
];

export const menuConfigs = { main, user };
