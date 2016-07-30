const { TwiSearch } = require('../lib')
const assert = require('assert')
const co = require('co')

describe('twi-search', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('', () => co(function * () {
    let word = 'http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1463546664'
    let res = yield TwiSearch(word, {count: 100})
    let tweets = res.statuses
    tweets.forEach(tw => {
      tw.popularity = tw.retweet_count + tw.favorite_count
    })
    tweets.sort((tw1, tw2) => tw2.popularity - tw1.popularity)
    let lean = tweets.map(tw => ({text: tw.text, popularity: tw.popularity}))
    console.log(lean)
    assert.ok(1)
  }))
})

/* global describe, before, after, it */
