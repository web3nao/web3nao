import { RequestParams } from '../types/Request.types'
import { ApiDescription } from '../types/ApiDescription.type'

export namespace Camunda {
  export type Entity = { console }
  export type Endpoint = {
    token
    createCluster
    getClusters
    getClustersParameters
    deleteCluster
    getClients
    createClient
    getClient
    deleteClient
  }

  export interface ConsoleToken extends RequestParams {
    kind: 'camunda.console.token'
    'body:grant_type': 'client_credentials'
    'body:audience': 'api.cloud.camunda.io'
    'body:client_id': string
    'body:client_secret': string
  }

  export interface ConsoleGetClusters extends RequestParams {
    kind: 'camunda.console.getClusters'
    'auth:Authorization': string
  }

  export interface ConsoleGetClustersParameters extends RequestParams {
    kind: 'camunda.console.getClustersParameters'
    'auth:Authorization': string
  }

  export interface ConsoleDeleteCluster extends RequestParams {
    kind: 'camunda.console.deleteCluster'
    'auth:Authorization': string
    'param:clusterId': string
  }

  export interface ConsoleCreateCluster extends RequestParams {
    kind: 'camunda.console.createCluster'
    'auth:Authorization': string
    'body:name': string
    'body:planTypeId': string
    'body:channelId': string
    'body:generationId': string
    'body:regionId': string
  }

  export interface ConsoleGetClients extends RequestParams {
    kind: 'camunda.console.getClients'
    'auth:Authorization': string
    'param:clusterId': string
  }

  export interface ConsoleCreateClient extends RequestParams {
    kind: 'camunda.console.createClient'
    'auth:Authorization': string
    'param:clusterId': string
    'body:clientName': string
  }

  export interface ConsoleGetClient extends RequestParams {
    kind: 'camunda.console.getClient'
    'auth:Authorization': string
    'param:clusterId': string
    'param:clientId': string
  }

  export interface ConsoleDeleteClient extends RequestParams {
    kind: 'camunda.console.deleteClient'
    'auth:Authorization': string
    'param:clusterId': string
    'param:clientId': string
  }

  export const API: ApiDescription<Entity, Endpoint> = {
    meta: {
      id: 'camunda',
      name: 'Camunda',
      url: 'https://camunda.com',
      docs: 'https://docs.camunda.io/',
      tags: ['web2'],
      category: 'automation',
      type: 'workflows',
    },
    base: 'https://api.cloud.camunda.io',
    api: {
      console: {
        token: {
          meta: {
            title: 'OAuth Token',
            description: 'Get OAuth Token for Camunda Platform',
            docs: 'https://docs.camunda.io/docs/apis-clients/console-api-reference/',
          },
          method: 'POST',
          base: 'https://login.cloud.camunda.io',
          paths: [
            {
              name: 'oauth',
              type: 'static',
            },
            {
              name: 'token',
              type: 'static',
            },
          ],
        },
        getClusters: {
          meta: {
            title: 'Get Clusters of Organization',
            description: 'A list of all your Camunda Cloud clusters.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/GetClusters',
          },
          method: 'GET',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
          ],
        },
        getClustersParameters: {
          meta: {
            title: 'Get Create Cluster Parameters',
            description:
              'Gets all possible options to create a Camunda Cloud cluster.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/GetParameters',
          },
          method: 'GET',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
            {
              name: 'parameters',
              type: 'static',
            },
          ],
        },
        deleteCluster: {
          meta: {
            title: 'Delete Cluster',
            description:
              'Irreversibly deletes a cluster identified by the given clusterUuid.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/DeleteCluster',
          },
          method: 'DELETE',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
            {
              name: 'clusterId',
              type: 'param',
            },
          ],
        },
        createCluster: {
          meta: {
            title: 'Create Cluster',
            description: 'Create a new Cluster.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/CreateCluster',
          },
          method: 'POST',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
          ],
        },
        getClients: {
          meta: {
            title: 'Get Cluster Clients',
            description:
              'A list of all the clients currently configured for your Camunda Cloud cluster.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/GetClients',
          },
          method: 'GET',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
            {
              name: 'clusterId',
              type: 'param',
            },
            {
              name: 'clients',
              type: 'static',
            },
          ],
        },
        createClient: {
          meta: {
            title: 'Create Cluster Client',
            description: 'Create a new Cluster Client',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/CreateClient',
          },
          method: 'POST',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
            {
              name: 'clusterId',
              type: 'param',
            },
            {
              name: 'clients',
              type: 'static',
            },
          ],
        },
        getClient: {
          meta: {
            title: 'Get Cluster Client',
            description:
              'The connection parameters needed to use the client with your Camunda Cloud cluster.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/GetClient',
          },
          method: 'GET',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
            {
              name: 'clusterId',
              type: 'param',
            },
            {
              name: 'clients',
              type: 'static',
            },
            {
              name: 'clientId',
              type: 'param',
            },
          ],
        },
        deleteClient: {
          meta: {
            title: 'Delete Cluster Client',
            description: 'Irreversibly deletes a cluster client.',
            docs: 'https://console.cloud.camunda.io/customer-api/openapi/docs/#/default/DeleteClient',
          },
          method: 'DELETE',
          auth: {
            Authorization: {
              type: 'header:bearer',
            },
          },
          paths: [
            {
              name: 'clusters',
              type: 'static',
            },
            {
              name: 'clusterId',
              type: 'param',
            },
            {
              name: 'clients',
              type: 'static',
            },
            {
              name: 'clientId',
              type: 'param',
            },
          ],
        },
      },
    },
  }
}

export default Camunda
