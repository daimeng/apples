const BASE_URL = 'https://pixabay.com/api/'
const KEY = '28085005-3cbe8f134a1d86eb4c15efbec'

export async function search(word) {
    const results = await (await fetch(`${BASE_URL}?key=${KEY}&q=${word}&per_page=3&image_type=vector&orientation=vertical&safesearch=true`)).json()
    // const idx = Math.floor(Math.random() * results.hits.length)
    // return results.hits[idx]
    return results.hits[0]
}
