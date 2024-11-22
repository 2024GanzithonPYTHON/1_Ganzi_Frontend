import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose }) => {
  const [provinces, setProvinces] = useState([]); // 대분류 (시/도) 데이터
  const [cities, setCities] = useState([]); // 시군구 데이터
  const [categories, setCategories] = useState([]); // 카테고리 데이터
  const [keywords, setKeywords] = useState([]); // 키워드 데이터
  const [selectedProvince, setSelectedProvince] = useState(null); // 선택된 시/도
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리

  // API 호출 함수
  const fetchProvinces = async () => {
    try {
      const response = await fetch("/province");
      const result = await response.json();
      if (response.ok && result.code === 200) {
        setProvinces(result.data);
      } else {
        console.error("Failed to fetch provinces:", result.msg);
      }
    } catch (error) {
      console.error("Error fetching provinces:", error);
    }
  };

  const fetchCities = async (provinceId) => {
    try {
      const response = await fetch(`/province/${provinceId}`);
      const result = await response.json();
      if (response.ok && result.code === 200) {
        setCities(result.data);
      } else {
        console.error("Failed to fetch cities:", result.msg);
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/category");
      const result = await response.json();
      if (response.ok && result.code === 200) {
        setCategories(result.data);
      } else {
        console.error("Failed to fetch categories:", result.msg);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchKeywords = async (categoryId) => {
    try {
      const response = await fetch(`/keyword/${categoryId}`);
      const result = await response.json();
      if (response.ok && result.code === 200) {
        setKeywords(result.data);
      } else {
        console.error("Failed to fetch keywords:", result.msg);
      }
    } catch (error) {
      console.error("Error fetching keywords:", error);
    }
  };

  // 모달이 열릴 때 데이터 로드
  useEffect(() => {
    if (isOpen) {
      fetchProvinces();
      fetchCategories();
    }
  }, [isOpen]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal">
          <div className="modal-content">
            <h2>지역 및 카테고리 선택</h2>

            {/* 대분류 (시/도) 선택 */}
            <div>
              <label>대분류 (시/도): </label>
              <select
                onChange={(e) => {
                  const provinceId = e.target.value;
                  setSelectedProvince(provinceId);
                  fetchCities(provinceId); // 시군구 데이터 가져오기
                }}
              >
                <option value="">선택하세요</option>
                {provinces.map((province) => (
                  <option key={province.id} value={province.id}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 시군구 선택 */}
            {selectedProvince && (
              <div>
                <label>시군구: </label>
                <select>
                  <option value="">선택하세요</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* 카테고리 선택 */}
            <div>
              <label>카테고리: </label>
              <select
                onChange={(e) => {
                  const categoryId = e.target.value;
                  setSelectedCategory(categoryId);
                  fetchKeywords(categoryId); // 키워드 데이터 가져오기
                }}
              >
                <option value="">선택하세요</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 키워드 선택 */}
            {selectedCategory && (
              <div>
                <label>키워드: </label>
                <select>
                  <option value="">선택하세요</option>
                  {keywords.map((keyword) => (
                    <option key={keyword.id} value={keyword.id}>
                      {keyword.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button onClick={onClose}>닫기</button>
          </div>
        </div>,
        document.getElementById("modal-root")
      )
    : null;
};

export default Modal;
