const HOST_NAME = 'https://api.homestyler.com'

export function fetchDesigns(offset = 0, limit = 20) {
  // return fetch().then(resp => resp.json())
  return new Promise(resolve => {
    wx.request({
      url: `${HOST_NAME}/search-design/api/v1/search/design/case/3d/bySearchTerm?sort=sort asc,updateDate desc&brilliant=&offset=${offset}&limit=${limit}&filterQuery=&searchTerm=`,
      success: resolve
    })
  }).catch(err => console.log(err))
}

export function fetchDesignDetail(assetId) {
  return fetch(
    `${HOST_NAME}search-design/api/v1/search/design/case/3d/byId/${assetId}`
  ).then(resp => resp.json())
}
