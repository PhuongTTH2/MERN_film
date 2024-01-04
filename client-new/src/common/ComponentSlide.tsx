import { useEffect, useState } from "react";
import tmdbConfigs from "configs/tmdb.configs";
import mediaApi from "api/media.api";
interface Props {
  mediaType: any
  mediaCategory: any
}

interface List {
  page: number
  results: any[]
  total_pages: number
  total_results: number
}

const ComponentSlide = ({mediaType, mediaCategory}: Props) => {
  
  const [movies, setMovies] = useState<any>([]);

  useEffect(() =>{

    const getMedias = async () => {

      const { response, err }= await mediaApi.getList({
        mediaType,
        mediaCategory,
        page: 1
      });
      // let newRes: List = response
      // console.log('aaaa',response)
      // if (newRes) setMovies(newRes.results );
    }
    getMedias();
  },[mediaType, mediaCategory])
  return (
    <div>
      aaa
    </div>
  )
}

export default ComponentSlide
