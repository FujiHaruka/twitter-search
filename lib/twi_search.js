const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_TOKEN_SECRET
})

function TwiSearch (word, options = {}) {
  return new Promise((resolve, reject) => {
    let params = {
      q: `${word} -RT`,
      lang: 'ja',
      count: 100,
      // include_entities: true
      // result_type: 'popular'
    }
    client.get('search/tweets', Object.assign(params, options), (err, tweets, response) => {
      if (!err) {
        resolve(tweets)
        return
      }
      reject(err)
    })
  })
}

module.exports = TwiSearch
