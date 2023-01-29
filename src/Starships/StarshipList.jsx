import { useEffect, useState } from "react";
import { getStarshipList } from "../services/sw-api";
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const[ starshipList, setStarshipList ] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  },[])

  return(
    <div className="starship-cards">
      {starshipList.length ?
        <>
          {starshipList.map(starship => 
            <div key={starship.index}>
              <Link to='/starship' state={{starship}}>{starship.name}</Link>
            </div>
          )}
        </>
        :
        <>
          <h3>Loading starhips...</h3>
        </>
      }
    </div>
  )
}

export default StarshipList