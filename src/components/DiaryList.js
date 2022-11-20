import React, { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "과거순" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest");
  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // diaryList가 가지고 있는 값을 변경하지 않기 위해 복사본을 만듦
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };
  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
