import { useEffect, useState } from "react";
import { db } from "./Firebase";

export default function useFirebaseSnapshot(num, cat){
  const [resp, setResp] = useState([]);

  useEffect(()=>{
    if(cat){
      fetchData();
    };
    if(cat === 'Homepage'){
      fetchData();
    };
    // eslint-disable-next-line
  },[cat]);

  const amara = db.collection('amara')

  const getData = cat && cat !== 'Homepage' ? amara.where('category', '==', cat) : amara;
  
  async function fetchData(){
    await getData
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