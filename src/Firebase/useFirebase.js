import { useState } from "react";
import { db, storage } from "./Firebase";

export default function useFirebase(num){
  const [res, setRes] = useState([]);
  
  async function fetchData(){
    await db.collection('amara')//.orderBy('timestamp', 'desc')
    .limit(num)
    .get()
    .then((snapshot) => {
      let arr = [];
      snapshot.docs.map(async(doc) => {
        arr.push({id: doc.id, data: doc.data()});

      });
      setRes(arr);
    });
  };
  fetchData();
  return[res]
};