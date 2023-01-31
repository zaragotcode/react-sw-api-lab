import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../services/sw-api"
import { Link } from "react-router-dom"

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      console.log(starshipData);
      setStarshipPage(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <h3>Name: {starshipPage.name}</h3>
      <h3>Model: {starshipPage.model}</h3>
      <Link to="/">Return</Link>
    </>
  )
}

export default StarshipPage