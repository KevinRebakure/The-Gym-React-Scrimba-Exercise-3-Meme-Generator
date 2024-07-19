export let fetched = false

export async function memesData() {
 if (!fetched) {
   console.log("fetched");
   const response = await fetch("https://api.imgflip.com/get_memes");
   const data = await response.json();
   fetched = !fetched
   return data.data.memes;
 }
}