export async function getData() {
  const result = await fetch(import.meta.env.VITE_API_URL)
  const resultJSON= await result.json();
  return resultJSON.data
}