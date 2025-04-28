import useSWR from "swr"
 
export default function GetApi(){
  const {data, error} = useSWR('https://dummyjson.com/products')
  
  return {
    prodotti: data,
    error,
    loading: !data && !error
  }
}