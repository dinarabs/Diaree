import request from 'supertest'
const mockingoose = require('mockingoose')
import { createServer } from '../server'
import { tags } from './__fixtures__/tags'
import diaryEntryModel from '../models/diaryEntry'
import tagModel from '../models/tag'

const app = createServer()

describe('GET /tags', () => {
  describe('when there are no tags', () => {
    beforeEach(() => {
      mockingoose.resetAll()
    })

    it('should return an empty array', async () => {
      mockingoose(diaryEntryModel).toReturn([], 'find')

      const response = await request(app).get('/tags')

      expect(response.status).toEqual(404)
      expect(response.body).toEqual({ message: 'No tags found' })
    })
  })

  describe('when there are tags', () => {
    beforeEach(() => {
      mockingoose.resetAll()
    })

    it('should return an array of tags', async () => {
      mockingoose(tagModel).toReturn(tags, 'find')

      const response = await request(app).get('/tags')

      expect(response.status).toEqual(200)
      expect(response.body[0].name).toEqual(tags[0].name)
    })
  })
})
