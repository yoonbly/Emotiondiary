import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);

  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    if (diaryList.length >= 1) {
      // 당월의 첫날
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();
      // 당월의 마지막날
      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();
      // 당월 안에 작성된 일기 데이터만 조회
      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
      // diaryList가 추가되거나 삭제될때도 불러와야함
    }
  }, [diaryList, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };
  return (
    <div>
      <MyHeader
        headText={headText}
        leftchild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightchild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
