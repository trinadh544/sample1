this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache')
    .then(function(ca){
      ca.addAll([

      ])
    })
  )
})
//fectch
this.addEventListener('fetch',function(event){
  event.respondWith(
    caches.open('mycache')
    .then(function(cache){
      return cache.match(event.request)
      .then(function(result){
        return result || fetch(event.request)
        .then(function(result){
          cache.put(event.request,result.clone());
          return result;
            })
      })
    })
  )
})
