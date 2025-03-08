import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    {
      const currentDiaryItem = data.find(
        (item) => String(item.id) === String(id)
      );

      if (!currentDiaryItem) {
        nav("/", { replace: true });
      }
      setCurDiaryItem(currentDiaryItem);
    }
  }, [id]);

  return curDiaryItem;
};

export default useDiary;
