import { RequestParams } from '../types/Request.types'
import { ApiDescription } from '../types/ApiDescription.type'

export namespace Web3Storage {
  export type Entity = { upload }
  export type Endpoint = { content }

  export interface UploadContent extends RequestParams {
    kind: 'web3storage.upload.content'
    'body:content': any
    'auth:Authorization': string
  }

  export const API: ApiDescription<Entity, Endpoint> = {
    meta: {
      id: 'web3storage',
      name: 'Web3Storage',
      url: 'https://web3.storage',
      docs: 'https://web3.storage/docs',
      tags: ['web3'],
      category: 'storage',
      type: 'ipfs',
    },
    base: 'https://api.web3.storage',
    auth: {
      Authorization: { type: 'header:bearer' },
    },
    api: {
      upload: {
        content: {
          meta: {
            title: 'Upload Content',
            description:
              'Store files using Web3.Storage. You can upload either a single file or multiple files.',
            docs: 'https://web3.storage/docs/reference/http-api/#operation/post-upload',
          },
          method: 'POST',
          paths: [
            {
              name: 'upload',
              type: 'static',
            },
          ],
        },
      },
    },
  }
}

export default Web3Storage
