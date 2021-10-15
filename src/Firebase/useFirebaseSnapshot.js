import { useEffect, useState } from "react";
import { db } from "./Firebase";

export default function useFirebaseSnapshot(num){
  const [resp, setResp] = useState(null);

  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  },[]);
  
  async function fetchData(){
    await db.collection('amara')
    .orderBy('timestamp', 'desc')
    .limit(num)
    .get()
    .then((snapshot) => {
      let arr = [];
      snapshot.docs.map(async(doc) => {
        let obj = {id: doc.id};
        Object.entries(doc.data()).forEach(([key, value]) => {
          obj[key] = value
        });
        arr.push(obj);

      });
      setResp(arr);
    });
  };
  
  return[resp]
};