import styled from "styled-components"
import { List, ListItem } from "./global.style"
import topBg from "../assets/kv.jpg"
import mobileTopBg from "../assets/Mobile/kv.png"
import headline from "../assets/Story/story_bg_story.png"
import storyBg from "../assets/Story/story_bg.jpg"
import mbStoryBg from "../assets/Mobile/story_bg.jpg"
import gameBg from "../assets/GameSystem/game_bg.jpg"
import goodsBg from "../assets/Goods/goods_bg.png"
import goodsBgGoods from "../assets/Goods/goods_bg_goods.png"
import mobileBgGoods from "../assets/Goods/mobile_goods_bg.png"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

// TOP CONTENT
export const TopSection = styled.section`
    height: 136rem;
    background-image: url(${mobileTopBg.src});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
    position: relative;
    .visible {
        display: block;
    }
    .hidden {
        display: none;
    }
    @media(min-width: 768px) {
        background-image: url(${topBg.src});
        background-size: cover;
        width: 100%;
        height: 57.78571vw;
    }
`

export const InnerWrapper = styled.div`
    @media(min-width: 768px) {
        width: 100%;
        height: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }
`

export const BgMovie = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    position: relative;
    overflow: hidden;
    video {
        width: auto;
        height: 100%;
        object-fit: contain;
    }
    @media(max-width: 767px) {
        opacity: 0;
        display: none !important;
    }
`

export const ServiceInfo = styled.p`
    margin: 0;
    width: 68rem;
    position: absolute;
    bottom: 17.7rem;
    left: 50%;
    transform: translate(-50%, 0);
    @media(min-width: 768px) {
        width: 30.8vw;
        bottom: 5.5vw;
        right: 1.65vw;
        margin: 0;
        left: unset;
        transform: translate(0, 0);
    }
    img {
        width: 100%
    }
`

export const StoreList = styled.dl`
    width: 64.6rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 8.8rem;
    @media(max-width: 767px) {
        left: 50%;
        transform: translateX(-50%);
    }
    @media(min-width: 768px) {
        width: 30.8vw;
        bottom: 2.5vw;
        right: 1.65vw;
        padding: 0 1.21vw 0 1vw;
    }
`

export const GameLogo = styled.dt`
    width: 19rem;
    @media(min-width: 768px) {
        width: 10.21vw;
        cursor: pointer;
    }
    img {
        width: 100%;
    }
    :hover {
        img {
            opacity: .5;
        }
    }
`

export const Stores = styled(List)`
    display: flex;
    justify-content: space-between;
    li {
        list-style-type: none;
    }
    .apple {
        width: 18.7rem;
        @media(min-width: 768px) {
            width: 7.65vw;
            cursor: pointer;
        }
        margin: 0 .57vw;
        img {
            width: 100%;
        }
        :hover {
            img {
                opacity: .5;
            }
        }
    }
    .google {
        width: 23rem;
        @media(min-width: 768px) {
            width: 9.5vw;
            cursor: pointer;
        }
        img {
            width: 100%;
        }
        :hover {
            opacity: .5;
        }
    }
`

export const MovieList = styled(List)`
    li {
        position: absolute;
    }
`

export const StyledListItem = styled(ListItem)`
    :first-child {
        width: 15vw;
        bottom: 6.78vw;
        left: 50%;
        translate: -50% 0;
        cursor: pointer;
        .change {
            position: relative;
            img {
                width: 100%;
                :fisrt-child {
                    opacity: 1;
                    transition: opacity .5s ease-in-out;
                }
                :nth-child(2) {
                    opacity: 0;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transition: opacity .5s ease-in-out;
                }
            }
            :hover {
                img {
                    :fisrt-child {
                        opacity: 0;
                        transition: opacity .5s ease-in-out;
                    }
                    :nth-child(2) {
                        opacity: 1;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        transition: opacity .5s ease-in-out;
                    }
                }
            }
            @media(max-width: 767px) {
                display: none;
                opacity: 0;
            }
        }
    }
    :nth-child(2) {
        position: absolute;
        width: 32.7rem;
        bottom: 39.6rem;
        right: 6rem;
        @media(min-width: 768px) {
            width: 18vw;
            bottom: 2.42vw;
            left: 2.78vw;
            a {
                margin-top: 0.24vw;
                cursor: pointer;
                :hover {
                    img {
                        opacity: .5;
                        transition: opacity .5s ease;
                    }
                }
            }
            img {
                width: 100%;
                transition: opacity .5s ease;
            }
        }
        @media(max-width: 767px) {
            .game-text {
                display: none;
            }
        }
        img {
            width: 100%;
        }
    }
`

// END TOP CONTENT

// STORY SECTION
export const StorySection = styled.section`
    width: 100%;
    height: 127.7rem;
    position: relative;
    background-image: url(${mbStoryBg.src});
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
    @media (min-width: 768px) {
        font-size: 0;
        height: 99.7rem;
        background-image: url(${storyBg.src});
        background-size: cover;
        background-position: center;
    }
    :after {
        content: "";
        width: 100%;
        display: block;
        background-image: url(${headline.src});
        background-size: auto 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        @media(max-width: 767px) {
            content: none;
        }
    }
`

export const StoryInnerWrapper = styled(InnerWrapper)`
    max-width: 1400px;
    margin: 0 auto;
`

export const StoryContent = styled.div`
    height: 100%;
    position: relative;
    @media(min-width: 768px) {
        display: flex;
        position: absolute;
        right: 5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }
    img {
        width: 100%;
    }
    .story-title {
        position: absolute;
        width: 35.5rem;
        right: 4.9rem;
        top: 22.3rem;
        margin: 0;
        @media(min-width: 768px) {
            position: relative;
            width: 32.2rem;
            margin-left: 17.5rem;
            right: unset;
            top: unset;
        }
    }
    .text-1 {
        width: 68.5rem;
        position: absolute;
        top: 38.1rem;
        left: 5.7rem; 
        @media(min-width: 768px) {
            position: relative;
            width: 46.5rem;
            margin-left: 5rem;
            top: unset;
            left: unset;
        }
    }
    .text-2 {
        width: 73.8rem; 
        position: absolute;
        top: 59.4rem;
        left: 0.5rem;
        @media(min-width: 768px) {
            position: relative;
            width: 54.3rem;
            margin-right: 2.5rem;
            top: unset;
            left: unset;
        }
    }
    .text-3 {
        width: 73.6rem;
        position: absolute;
        top: 80.7rem;
        left: 0.6rem;
        @media(min-width: 768px) {
            position: relative;
            width: 54.9rem;
            margin-right: 4.2rem;
            top: unset;
            left: unset;
        }
    }
`

// END STORY SECTION

// LEADER SECTION
export const LeaderSection = styled.section`
    width: 100%;
    height: 117.5rem;
    overflow: hidden;
    @media(min-width: 768px) {
        height: 56.25vw;
    }
`
// END LEADER SECTION

// GAME SYSTEM SECTION
export const GameSystemSection = styled.section`
    width: 100%;
    height: 109.6rem;
    position: relative;
    overflow: hidden;
    @media(min-width: 768px) {
        height: 63.6rem;
    }
    .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(${gameBg.src}) repeat-x 0 0/auto 100%;
        animation: background-scroll-p 60s linear infinite;
    }
    @keyframes background-scroll-p {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: -200rem 0;
        }
    }
`

export const GameInnerWrapper = styled(InnerWrapper)`
    width: 100%;
    height: 100%;
    position: relative;
`

export const GameTitle = styled.h2`
    margin: 0;
    @media(min-width: 768px) {
        width: 65.8rem;
        position: absolute;
        display: flex;
        justify-content: center;
        top: 3.4rem;
        left: 36.8rem;
    }
    img {
        width: 100%;
    }
`

export const SystemList = styled(List)`
    width: 69.7rem;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 5rem;
    left: 2.6rem;
    @media(min-width: 768px) {
        width: 109.2rem;
        bottom: 7.6rem;
        left: 15.4rem;
    }   
`

export const SystemItem = styled(ListItem)`
    width: 35.6rem;
    margin-right: -1.5rem;
    @media(min-width: 768px) {
        margin-right: 0;
        width: 27.3rem;
    }
    position: relative;
    img {
        width: 100%;
        :first-child {
            opacity: 1;
            transition: transform .5s ease;
        }
        :nth-child(2) {
            opacity: 0;
            position: absolute;
            inset: 0;
        }
    }
    :hover {
        img {
            transform: translateY(-2rem);
            :first-child {
                opacity: 0;
            }
            :nth-child(2) {
                opacity: 1;
                transition: transform .5s ease;
            }
        }
    }
`
// END GAME SYSTEM SECTION

// GOOODS SECTION
export const GoodsSection = styled.section`
    height: 123.6rem;
    background-image: url(${mobileBgGoods.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    @media (min-width: 767px) {
        width: 100%;
        height: 66.7rem;
        background-image: url(${goodsBg.src});
        background-size: cover;
        background-position: center;
        position: relative;
        :after {
            content: '';
            display: block;
            @media(min-width: 768px) {
                width: 13.4rem;
                height: 100%;
            }
            position: absolute;
            top: 0;
            right: 0;
            background-image: url(${goodsBgGoods.src});
            background-size: auto 100%;
        }   
    }
`

export const GoodsInnerWrapper = styled(InnerWrapper)`
    display: flex;
    align-items: center;
    @media(min-width: 768px) {
        max-width: 1400px;
    }
`

export const GoodsContentWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
`

export const GoodsTitle = styled.h2`
    position: absolute;
    width: 29.8rem;
    top: 15.6rem;
    left: 22.7rem;

    @media (min-width: 767px) {
        position: absolute;
        width: 22.6rem;
        top: 16.8rem;
        left: 21.6rem;
    }
    picture {
        width: auto;
        height: auto;
        img {
            width: 100%;
            height: auto;
        }
    }
`

export const GoodsText = styled.p`
    position: absolute;
    width: 54.7rem;
    top: 32.5rem;
    left: 10rem;

    picture {
        width: auto;
        height: auto;
        img {
            width: 100%;
            height: auto;
        }
    }
    @media (min-width: 767px) {
        position: absolute;
        width: 42.8rem;
        top: 31.8rem;
        left: 23.4rem;
    }
`

export const KkrText = styled.p`
    position: absolute;
    width: 47.9rem;
    top: 45rem;
    left: 13.5rem;
    picture {
        width: auto;
        height: auto;
        img {
            width: 100%;
            height: auto;
        }
    }

    @media (min-width: 767px) {
        width: 36.7rem;
        top: 44.5rem;
        left: 23.4rem;
    }
`

export const GoodsLeftContent = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Texts = styled.div`
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    position: absolute;
    width: 69.3rem;
    top: 59.3rem;

    p {
        margin: 0
    }
    img {
        width: 100%;
    }
    @media (min-width: 767px) {
        width: 48.6rem;
        top: 16.7rem;
        right: 20rem;
        left: unset;
        transform: none;
    }
`
// END GOODS SECTION