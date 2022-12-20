import React from "react";
import firstThumbnail from "./assets/1st thumbnail.jpg";
import secondThumbnail from "./assets/2nd thumbnail.jpg";
import thirdThumbnail from "./assets/3rd thumbnail.jpg";
import fourthThumbnail from "./assets/4th thumbnail.jpg";
import fifthThumbnail from "./assets/5th thumbnail.jpg";
import sixthThumbnail from "./assets/6th thumbnail.jpg";
import playImage from "./assets/play.png";
import { PaperClipIcon } from "@heroicons/react/20/solid";
//import './App.css';

function App() {
  const videos = [
    {
      id: 1,
      videoName: "Nothing Team Review Fake Products",
      description: (
        <p>
          Join us with Carl Pei, Felicien & Joseph as we review fake versions of
          the Nothing Ear (1). -------------------------------------------- ➤
          Our Website: www.nothing.tech ➤ Follow Us: www.instagram.com/nothing
          www.twitter.com/nothing www.tiktok.com/@nothing.tech
          www.discord.com/invite/nothingtech
          www.linkedin.com/company/nothingtech
        </p>
      ),
      url: "https://www.youtube.com/watch?v=U6Bj_2DuEL4",
      likes: "10K",
      views: 155623,
      comments: 494,
      channel: "Nothing",
      thumbnail: "https://i.ytimg.com/vi/U6Bj_2DuEL4/maxresdefault.jpg",
      thumbnailImage: { firstThumbnail } ,
    },
    {
      id: 2,
      videoName: "I Made Her a Desi Cricketer | SlayyPop",
      description: (
        <p>
          Cricket 22 career journey. IPL me naam banake rahenge, Jahnvi Kapoor
          ko pata ke rahenge. Future RCB star. Virat Kohli's chaddi buddy.
          Instagram - @Abhyudaya_Mohan & @GautamiKawale
          https://www.instagram.com/abhyudaya_m...
          https://www.instagram.com/gautamikawale/ SlayyPop videos edited by -
          Kshitij
        </p>
      ),
      url: "https://www.youtube.com/watch?v=4QojQqpZ018",
      likes: "103K",
      views: 1433761,
      comments: 1881,
      channel: "SlayyPop",
      thumbnail: "https://i.ytimg.com/vi/4QojQqpZ018/maxresdefault.jpg",
      thumbnailImage: { secondThumbnail },
    },
    {
      id: 3,
      videoName: "The Electric Car Pre-Order Problem",
      description: (
        <p>
          I really want EVs to be the future, but this is getting ridiculous...
          MKBHD Merch: http://shop.MKBHD.com Tech I'm using right now:
          https://www.amazon.com/shop/MKBHD Intro Track:
          http://youtube.com/20syl Playlist of MKBHD Intro music:
          https://goo.gl/B3AWV5 ~ http://twitter.com/MKBHD
          http://instagram.com/MKBHD http://facebook.com/MKBHD
        </p>
      ),
      url: "https://www.youtube.com/watch?v=a6zvvlrd-jw",
      likes: "115K",
      views: 2436125,
      comments: 8507,
      channel: "Marques Brownlee",
      thumbnail: "https://i.ytimg.com/vi/a6zvvlrd-jw/maxresdefault.jpg",
      thumbnailImage: { thirdThumbnail },
    },
    {
      id: 4,
      videoName: "Apple FINALLY Admits it...",
      description: (
        <p>
          Clip from Lew Later (Elon Musk Makes A Bold Move On Twitter HQ) -
          https://youtu.be/D9P-l6zss2g
        </p>
      ),
      url: "https://www.youtube.com/watch?v=HUgROf8QGCo",
      likes: "7.7K",
      views: 371212,
      comments: 725,
      channel: "LaterClips",
      thumbnail: "https://i.ytimg.com/vi/HUgROf8QGCo/maxresdefault.jpg",
      thumbnailImage: { fourthThumbnail },
    },
    {
      id: 5,
      videoName:
        "Cities Skylines Financial District DLC made INSIDER TRADING Legal?!",
      description: (
        <p>
          Use code POGKIBITZDEC60 for 60% off your first box at
          https://strms.net/ImkibitzFactorDecem... #ad
          ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ Cities Skylines Financial District DLC made
          INSIDER TRADING Legal?! Cities Skylines gameplay today playing with
          the new Financial Districts mini DLC! This new update adds in a new
          financial district specialization which opens up the stock market,
          allows you to build banks, and make millions! 🟠 ➤➤ Patreon -
          https://www.patreon.com/imkibitz 🔴 ➤➤ SUBSCRIBE -
          https://goo.gl/47a9J3 🔵 ➤ TWITTER - https://twitter.com/ImKibitz 🟣 ➤
          TWITCH - https://www.twitch.tv/imkibitz 🟡 ➤ VODS -
          https://bit.ly/3yaBd3J 🟢 ➤ SPOTIFY - https://spoti.fi/3NFcOsh Music
          is COPYRIGHT FREE for your streams and videos! Available wherever you
          can listen to music as well, hope you enjoy!
          ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀ MORE from ImKibitz: • NEW Videos! ➤
          https://www.youtube.com/playlist?list... • Satisfactory ➤
          https://www.youtube.com/watch?v=iAC0b... • Cities Skylines ➤
          https://www.youtube.com/watch?v=82Zld... • Factorio ➤
          https://www.youtube.com/watch?v=bPRfT... • Captain of Industry ➤
          https://www.youtube.com/watch?v=is0RN... • Timberborn ➤
          https://www.youtube.com/watch?v=yvjwa... • NEW Videos! ➤
          https://www.youtube.com/playlist?list... ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
          Cities Skylines Mods: *These are the game changing mods, not assets. I
          got like 100+ assets and I'm not listing all those lol. MODS: Network
          Anarchy, Surface Painter temporary fix, Extended Managers Library
          1.0.3, Loading Screen Mod Revisited 0.7, Play It!, Render It!, Tree
          Anarchy 1.3.5, Extra Landscaping Tools [1.15.0-f2 FIX], Compatibility
          Report, 81 Tiles 2 TESTING, Realistic LUT V1.2, Ultimate Level of
          Detail (ULOD), Move It, Optimised Outside Connections, Hide It!, TM:PE
          11.7.1.2 STABLE (Traffic Manager: President Edition), Loading Order
          Mod V1.12.4-Beta, Node Controller Renewal 3.3.2, Harmony 2.2-0 (Mod
          Dependency) [Plazas & Promenades compatible], Roundabout Builder,
          Patch Loader Mod, Softer Shadows, Clear and Bright and Large Water
          Pumping Station. Cities Skylines DLC I’m using: Match Day, Natural
          Disasters, Pearls from the East, After Dark, Mass Transit, Green
          Cities, Euro Suburbia, Art Deco, High-Tech Buildings, Snowfall,
          Parklife, Industries, Campus, Modern City Center, Sunset Harbor, the
          Airport DLC, the Plaza and Promenades DLC, and the Financial Districts
          DLC. About Cities Skylines: Cities Skylines is a city building game /
          city simulator simulation game where you build a city and manage its
          citizens and the traffic they cause. Build roundabouts, highways,
          buses, bus loops, trains, monorail, subway system, blimps and more to
          solve traffic problems and get unlimited money and profit every week!
          There’s a ton of Cities Skylines DLC as well and anytime a new Cities
          Skylines DLC or new Cities Skylines update comes out we’ll check it
          out! #ImKibitz #CitiesSkylines
        </p>
      ),
      url: "https://www.youtube.com/watch?v=qyPmdzm2-is",
      likes: "5.5K",
      views: 120207,
      comments: 161,
      channel: "ImKibitz",
      thumbnail: "https://i.ytimg.com/vi/qyPmdzm2-is/maxresdefault.jpg",
      thumbnailImage: { fifthThumbnail },
    },
    {
      id: 6,
      videoName: "Using TESLA VALVES to beat Happy Glass!",
      description: (
        <p>
          Thank you to MANSCAPED for sponsoring today's video. Get 20% OFF +
          Free International Shipping + 2 FREE gifts with promo code
          “REALCIVILENGINEER” at https://manscaped.com/RealCivilEngineer Does 10
          years of drainage engineering make you better at the mobile water
          diverting game Happy Glass? LINKS! PATREON:
          https://www.patreon.com/Realcivilengi... MERCH:
          https://realcivilengineer.store MEMBERSHIP:
          https://www.youtube.com/channel/UCeP4... DISCORD:
          https://discord.gg/6uY2pC5eU2 REDDIT:
          https://www.reddit.com/r/realcivileng... TWITCH:
          https://www.twitch.tv/realcivilengineer PADDY (MY DOG):
          https://www.youtube.com/channel/UCcGn... STREAM ARCHIVE:
          https://www.youtube.com/channel/UClkt... PLAYLISTS! MINI MOTORWAYS:
          https://youtube.com/playlist?list=PLZ... INFRA:
          https://youtube.com/playlist?list=PLZ... DORFROMANTIK:
          https://youtube.com/playlist?list=PLZ... CITIES SKYLINES - ENGITOPIA:
          https://youtube.com/playlist?list=PLZ... KERBAL SPACE PROGRAM:
          https://www.youtube.com/playlist?list... POLY BRIDGE 2:
          https://www.youtube.com/playlist?list... HYDRONEER:
          https://www.youtube.com/playlist?list... VARIETY PLAYLIST:
          https://www.youtube.com/playlist?list... Epic Game Store
          Support-A-Creator Code: RCE (In connection with Epic Games’
          Support-A-Creator Program, I may receive a commission from certain
          in-game purchases) #realcivilengineer #engineering #HappyGlass
        </p>
      ),
      url: "https://www.youtube.com/watch?v=agrKQ9T58To",
      likes: "24K",
      views: 604051,
      comments: 554,
      channel: "Real Civil Engineer",
      thumbnail: "https://i.ytimg.com/vi/agrKQ9T58To/maxresdefault.jpg",
      thumbnailImage: { sixthThumbnail },
    },
  ];

  let option: [] = [];
    
  let option2: [] = [];
    
  
  videos.forEach((video) => {
    option.push(
      //@ts-ignore//
      <option
        key={video.id}
        value={video.videoName}
        onClick={() => {
          setVideo1(video);
          setDropdownShow(dropdownshow + 1);
        }}
        className="p-1 bg-black text-white rounded-sm  cursor-pointer hover:text-blue-500"
      >
        {video.videoName}
      </option>
    );
    option2.push(
      //@ts-ignore//
      <option
        key={video.id}
        value={video.videoName}
        onClick={() => {
          setVideo2(video);
          setDropdownShow2(dropdownshow2 + 1);
        }}
        className="p-1 bg-black text-white rounded-sm  cursor-pointer hover:text-blue-500"
      >
        {video.videoName}
      </option>
    );
  });

  const [video1, setVideo1] = React.useState<any>(null);
  const [video2, setVideo2] = React.useState<any>(null);
  const [dropdownshow, setDropdownShow] = React.useState(0);
  const [dropdownshow2, setDropdownShow2] = React.useState(0);

  return (
    <>
      <div className="App">
        <div className="row">
          <div className="column">
            <header aria-label="Page Header" className="header">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="relative" id="searchBar">
                  <input
                    className="h-10 w-full rounded-full border-none bg-black pl-4 pr-10 text-sm shadow-sm sm:w-56"
                    id="searchInput"
                    type="search"
                    placeholder="Search Videos..."
                    autoComplete="off"
                    //onKeyUp={() => filterFunction()}
                    onChange={(e) => {
                      setVideo1(e.target.value);
                    }}
                    value={video1?.videoName}
                    onClick={() => {
                      setDropdownShow(dropdownshow + 1);
                    }}
                  />
                  <div
                    hidden={dropdownshow % 2 === 0 ? true : false}
                    className="p-1"
                  >
                    {option}
                  </div>
                </div>
              </div>
            </header>
            {video1 && (
              <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                <a className="block rounded-xl bg-white p-6 sm:p-8">
                  <div className="mt-16 sm:pr-8">
                    <a href={video1?.url}>
                      <img
                        src={video1?.thumbnail}
                        alt="Video Thumbnail"
                        className="cursor-pointer"
                      ></img>
                      <h3 className="text-xl font-bold text-gray-900">
                        {video1?.videoName}
                      </h3>
                    </a>

                    <div className="flex flex-col">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full">
                              <tbody>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    ID :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {video1?.id}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Title :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {video1?.videoName}
                                  </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Likes :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video1?.likes}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Comments :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video1?.comments}
                                  </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Views :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video1?.views}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Channel :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video1?.channel}
                                  </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Link :
                                  </td>
                                  <a
                                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                                    href={video1?.url}
                                  >
                                    {video1?.url}
                                  </a>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <div className="column">
            <header aria-label="Page Header" className="header">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="relative" id="searchBar">
                  <input
                    className="h-10 w-full rounded-full border-none bg-black pl-4 pr-10 text-sm shadow-sm sm:w-56"
                    id="searchInput"
                    type="search"
                    placeholder="Search Videos..."
                    autoComplete="off"
                    //onKeyUp={() => filterFunction()}
                    onChange={(e) => {
                      setVideo2(e.target.value);
                    }}
                    value={video2?.videoName}
                    onClick={() => {
                      setDropdownShow2(dropdownshow2 + 1);
                    }}
                  />
                  <div
                    hidden={dropdownshow2 % 2 === 0 ? true : false}
                    className="p-1"
                  >
                    {option2}
                  </div>
                </div>
              </div>
            </header>
            {video2 && (
              <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
                <a className="block rounded-xl bg-white p-6 sm:p-8">
                  <div className="mt-16 sm:pr-8">
                    <a href={video2?.url}>
                      <img
                        src={video2?.thumbnail}
                        alt="Video Thumbnail"
                        className="cursor-pointer"
                      ></img>
                      <h3 className="text-xl font-bold text-gray-900">
                        {video2?.videoName}
                      </h3>
                    </a>

                    <div className="flex flex-col">
                      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="overflow-hidden">
                            <table className="min-w-full">
                              <tbody>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    ID :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {video2?.id}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Title :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {video2?.videoName}
                                  </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Likes :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video2?.likes}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Comments :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video2?.comments}
                                  </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Views :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video2?.views}
                                  </td>
                                </tr>
                                <tr className="bg-white border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Channel :
                                  </td>
                                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                    {video2?.channel}
                                  </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Link :
                                  </td>
                                  <a
                                    className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                                    href={video2?.url}
                                  >
                                    {video2?.url}
                                  </a>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
