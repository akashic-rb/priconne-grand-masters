/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import { 
  GameLogo, 
  ServiceInfo, 
  StoreList,
  Stores, 
  MovieList,
  StyledListItem, 
  TopSection, 
  BgMovie
} from './index.style'
import serviceInfo from "../assets/badge_top_text_end.png"
import gameLogo from "../assets/fot_logo.png"
import appStore from "../assets/badge_app.png"
import googlePlay from "../assets/badge_google.png"
import btnPlayOff from "../assets/btn_play_kv_off.png"
import btnPlayOn from "../assets/btn_play_kv_on.png"
import gameplayText from "../assets/gameplay_text.jpg"
import movieThumb from "../assets/movie_thumb.png"
import useAutoplayVideo from '../hooks/useAutoplayVideo'
import { useRef } from 'react'

export default function Home() {
  const refVideo = useRef()
  const playBtn = useRef()
  const { hideVideo, playVideo } = useAutoplayVideo(refVideo, playBtn)

  return (
    <div>
      <Head>
        <title>プリコネ！グランドマスターズ公式サイト | プリンセスコネクト！Re:Dive (プリコネR) | Cygames</title>
        <meta name="description" content="プリコネ！グランドマスターズ 完全無料アプリ！期間限定で公開！" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TopSection>
        <Logo></Logo>
        {/* Bg Movie */}
        <BgMovie>
          <video ref={refVideo} onEnded={hideVideo} muted playsInline>
            <source src={"/videos/top_movie.mp4"}/>
          </video>
        </BgMovie>
        {/* Service info */}
        <ServiceInfo>
          <img src={serviceInfo.src} alt="公開期間が終了しました プレイしていただき誠にありがとうございました 引き続きプリンセスコネクト！Re:Diveをよろしくお願いします" />
        </ServiceInfo>
        <StoreList>
          <GameLogo>
            <img src={gameLogo.src} alt="" />
          </GameLogo>
          <Stores>
            <li className="apple">
              <img src={appStore.src} alt="App Storeからダウンロード" />
            </li>
            <li className="google">
              <img src={googlePlay.src} alt="Gogle Playで手に入れよう" />
            </li>
          </Stores>
        </StoreList>
        <MovieList>
          <StyledListItem className="movie1">
            <a ref={playBtn} className="change" onClick={playVideo}>
              <img src={btnPlayOff.src} alt="Play" />
              <img src={btnPlayOn.src} alt="Play" />
            </a>
          </StyledListItem>
          <StyledListItem className="movie2">
            <img src={gameplayText.src} alt="ゲームプレイPV"/>
            <a>
              <img src={movieThumb.src} alt="ゲームプレイ" />
            </a>
          </StyledListItem>
        </MovieList>
      </TopSection>

    </div>
  )
}
