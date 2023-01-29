import { useEffect, useState } from "react";
import { getStarshipList } from "../services/sw-api";

const StarshipList = () => {
  const[ starshipList, setStarshipList ] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  },[])


  
}

export default StarshipList