import config from "../config.json"
import styled from "styled-components"
import {CSSReset} from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import { StyledFavorites } from "../src/components/Favorites"


function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu/>
                <Header/>
                <Timeline playlists={config.playlists}/>
                <Favorites favorites={config.favorites}/>
            </div>
        </>
    )
  }
  
  export default HomePage

  const StyledHeader = styled.div`
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner {
        margin-top: 56px;
        width: 100%;
        height: 230px;
    }
    .banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  `;

  function Header() {
    return (
        <StyledHeader>
            <div className="banner">
                <img src={config.banner}/>
            </div>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                    {config.name}
                    </h2>
                    <p>
                    {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
  }

  function Timeline(props) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map((video) => {
                                    return(
                                        <a href={video.url}>
                                            <img src={video.thumb}/>
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }

  function Favorites(props) {
    const favorites = Object.keys(props.favorites)

    return (
        <StyledFavorites>
            {favorites.map((favorite) => {
                const favoritos = props.favorites[favorite];
                return (
                    <section className="favorites">
                        <h2>{favorite}</h2>
                        <div>
                            {
                                favoritos.map((favorito) => {
                                    return(
                                        <a href={favorito.url}>
                                            <img src={favorito.thumb}/>
                                            <span>
                                                {favorito.title}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
  }