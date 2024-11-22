import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import * as M from "../styles/StyledMain";
import Modal from './MainModal';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markers = useRef([]);

  const gosearch = () => {
    console.log("검색 페이지로 이동합니다.");
    window.location.href = "/search";
  };

  const gofav = () => {
    console.log("즐겨찾기 페이지로 이동합니다.");
    window.location.href = "/favorite";
  };

  const gomy = () => {
    window.location.href = "/my";
  };

  const gorec = () => {
    window.location.href = "/recommend";
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3,
          };
          mapInstance.current = new window.kakao.maps.Map(container, options);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(searchQuery, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setPlaces(data);
        displayMarkers(data);
      } else {
        alert("검색 결과가 없습니다.");
      }
    });
  };

  const displayMarkers = (places) => {
    markers.current.forEach((marker) => marker.setMap(null));
    markers.current = [];

    const bounds = new window.kakao.maps.LatLngBounds();

    places.forEach((place) => {
      const position = new window.kakao.maps.LatLng(place.y, place.x);
      const marker = new window.kakao.maps.Marker({ position });
      marker.setMap(mapInstance.current);
      markers.current.push(marker);

      bounds.extend(position);

      window.kakao.maps.event.addListener(marker, "click", () => {
        setModalContent(
          `장소: ${place.place_name}\n주소: ${place.address_name}`
        );
        setModalVisible(true);
      });
    });

    mapInstance.current.setBounds(bounds);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <M.Box>
      <M.Nav>
        <M.Profile></M.Profile>
        <M.Home>
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Home.svg`}
            alt="홈"
          />
          <div id="homename">메인홈</div>
        </M.Home>
        <M.Search onClick={gosearch}>
          <img
            id="search"
            src={`${process.env.PUBLIC_URL}/images/Search-none.svg`}
            alt="검색"
          />
          <div id="searchname">검색하기</div>
        </M.Search>
        <M.Review>
          <img
            id="review"
            src={`${process.env.PUBLIC_URL}/images/Review-none.svg`}
            alt="리뷰"
          />
          <div id="reviewname">리뷰 작성</div>
        </M.Review>
        <M.Recom onClick={gorec}>
          <img
            id="recom"
            src={`${process.env.PUBLIC_URL}/images/Recom-none.svg`}
            alt="추천"
          />
          <div id="recomname">추천장소</div>
        </M.Recom>
        <M.Fav onClick={gofav}>
          <img
            id="fav"
            src={`${process.env.PUBLIC_URL}/images/Fav-none.svg`}
            alt="즐겨찾기"
          />
          <div id="favname">즐겨찾기</div>
        </M.Fav>
        <M.My onClick={gomy}>
          <img
            id="my"
            src={`${process.env.PUBLIC_URL}/images/My-none.svg`}
            alt="마이"
          />
          <div id="myname">마이페이지</div>
        </M.My>
        <M.Set>
          <img
            id="setting"
            src={`${process.env.PUBLIC_URL}/images/Setting-none.svg`}
            alt="설정"
          />
        </M.Set>
      </M.Nav>

      <M.ContentArea>
        <M.SearchBar>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </M.SearchBar>
        <M.MapArea>
          <div ref={mapRef} style={{ width: "100%", height: "200vh" }}></div>
        </M.MapArea>
        <M.InfoSection>
          <ul>
            {places.map((place, index) => (
              <li key={index}>
                <strong>{place.place_name}</strong>
                <p>{place.address_name}</p>
              </li>
            ))}
          </ul>
        </M.InfoSection>
      </M.ContentArea>
      {modalVisible && (
        <Modal isOpen={modalVisible} onClose={closeModal}>
          <div>
            <h2>장소 정보</h2>
            <p>{modalContent}</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </Modal>
      )}
    </M.Box>
  );
};

export default Main;
