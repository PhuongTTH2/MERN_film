import React from 'react'
import {Box} from "@mui/material";
import Header from   'common/Header'
import ComponentSlide from 'common/ComponentSlide'
import tmdbConfigs from "configs/tmdb.configs";
const HomePage = () => {
  return (
    <>
     {/* <Box display="flex" minHeight="100vh"> */}
    <Header />
    <Box>
      <ComponentSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular}  />
    </Box>
     {/* </Box > */}
    </>
  )
}

export default HomePage
