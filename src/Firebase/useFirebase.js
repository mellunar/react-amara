import { useEffect, useState } from "react";
import { db } from "./Firebase";

export default function useFirebase(prodId,refetch){
  const [resp, setResp] = useState({});

  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  },[refetch]);
  
  async function fetchData(){
    await db.collection('amara')
    .doc(prodId)
    .get()
    .then((doc) => {
      setResp(doc.data());
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return[resp]
};