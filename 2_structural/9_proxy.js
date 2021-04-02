const networkFetch = (url) => {
  return `${url} - Answer from server`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - Answer from cache`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args) // изучить Reflect и сам proxy и Set() и Map()
    }
  },
})

console.log(proxiedFetch('https://www.youtube.com'))
console.log(proxiedFetch('https://vk.com'))
console.log(proxiedFetch('https://www.youtube.com')) // получаем ответ уже из кеша, и не ждем сервер, тк ответ уже есть
