import { ApiDescription } from '../types/ApiDescription.type'
import { AbstractApi } from '../configs/abstractapi.config'
import { Airtable } from '../configs/airtable.config'
import { Alchemy } from '../configs/alchemy.config'
import { ApicAgent } from '../configs/apicagent.config'
import { Apify } from '../configs/apify.config'
import { APITemplateIo } from '../configs/apitemplateio.config'
import { Auth0 } from '../configs/auth0.config'
import { BambooHR } from '../configs/bamboohr.config'
import { BaseRow } from '../configs/baserow.config'
import { Bitly } from '../configs/bitly.config'
import { Brandfetch } from '../configs/brandfetch.config'
import { BrowsersFyi } from '../configs/browsersfyi.config'
import { Bruzu } from '../configs/bruzu.config'
import { CalCom } from '../configs/calcom.config'
import { Calendarific } from '../configs/calendarific.config'
import { Camunda } from '../configs/camunda.config'
import { Carifai } from '../configs/clarifai.config'
import { Clearbit } from '../configs/clearbit.config'
import { ClickUp } from '../configs/clickup.config'
import { Clockify } from '../configs/clockify.config'
import { CoinCap } from '../configs/coincap.config'
import { CoinGecko } from '../configs/coingecko.config'
import { Coinlayer } from '../configs/coinlayer.config'
import { CoinMarketCap } from '../configs/coinmarketcap.config'
import { ContentFul } from '../configs/contentful.config'
import { ConvertKit } from '../configs/convertkit.config'
import { CountApi } from '../configs/countapi.config'
import { Courier } from '../configs/courier.config'
import { Covalent } from '../configs/covalent.config'
import { DeepL } from '../configs/deepl.config'
import { Dhl } from '../configs/dhl.config'
import { Disify } from '../configs/disify.config'
import { Etherscan } from '../configs/etherscan.config'
import { Eventbrite } from '../configs/eventbrite.config'
import { Fauna } from '../configs/fauna.config'
import { Frankfurter } from '../configs/frankfurter.config'
import { Github } from '../configs/github.config'
import { Grist } from '../configs/grist.config'
import { HackerNews } from '../configs/hackernews.config'
import { Harvest } from '../configs/harvest.config'
import { HelloSign } from '../configs/hellosign.config'
import { HostIo } from '../configs/hostio.config'
import { Hubspot } from '../configs/hubspot.config'
import { HunterIo } from '../configs/hunterio.config'
import { Jira } from '../configs/jira.config'
import { Linear } from '../configs/linear.config'
import { MailCheckAi } from '../configs/mailcheckai.config'
import { MailerSend } from '../configs/mailersend.config'
import { MailPace } from '../configs/mailpace.config'
import { Medium } from '../configs/medium.config'
import { Mergent } from '../configs/mergent.config'
import { Mezmo } from '../configs/mezmo.config'
import { MicroDev } from '../configs/microdev.config'
import { Mixpanel } from '../configs/mixpanel.config'
import { NewRelic } from '../configs/newrelic.config'
import { Notion } from '../configs/notion.config'
import { OneInch } from '../configs/oneinch.config'
import { OpenLibrary } from '../configs/openlibrary.config'
import { OpenSea } from '../configs/opensea.config'
import { Ortto } from '../configs/ortto.config'
import { PayPal } from '../configs/paypal.config'
import { Personio } from '../configs/personio.config'
import { Pinata } from '../configs/pinata.config'
import { PurgoMalum } from '../configs/purgomalum.config'
import { RapidApi } from '../configs/rapidapi.config'
import { RedisCloud } from '../configs/rediscloud.config'
import { RemoteOk } from '../configs/remoteok.config'
import { RemoveBg } from '../configs/removebg.config'
import { SendGrid } from '../configs/sendgrid.config'
import { Sentry } from '../configs/sentry.config'
import { SerpStack } from '../configs/serpstack.config'
import { Shortcut } from '../configs/shortcut.config'
import { Slack } from '../configs/slack.config'
import { Statically } from '../configs/statically.config'
import { Supabase } from '../configs/supabase.config'
import { TheGraph } from '../configs/thegraph.config'
import { Trello } from '../configs/trello.config'
import { Tribe } from '../configs/tribe.config'
import { Typeform } from '../configs/typeform.config'
import { Up42 } from '../configs/up42.config'
import { UsePlunk } from '../configs/useplunk.config'
import { Web3Storage } from '../configs/web3storage.config'
import { WhoIsXMLApi } from '../configs/whoisxmlapi.config'
import { ZeroX } from '../configs/zerox.config'
import { Zora } from '../configs/zora.config'

export const CONFIGS: Map<string, ApiDescription<any, any>> = new Map<string, ApiDescription<any, any>>([
['abstractapi', AbstractApi.API],
['airtable', Airtable.API],
['alchemy', Alchemy.API],
['apicagent', ApicAgent.API],
['apify', Apify.API],
['apitemplateio', APITemplateIo.API],
['auth0', Auth0.API],
['bamboohr', BambooHR.API],
['baserow', BaseRow.API],
['bitly', Bitly.API],
['brandfetch', Brandfetch.API],
['browsersfyi', BrowsersFyi.API],
['bruzu', Bruzu.API],
['calcom', CalCom.API],
['calendarific', Calendarific.API],
['camunda', Camunda.API],
['clarifai', Carifai.API],
['clearbit', Clearbit.API],
['clickup', ClickUp.API],
['clockify', Clockify.API],
['coincap', CoinCap.API],
['coingecko', CoinGecko.API],
['coinlayer', Coinlayer.API],
['coinmarketcap', CoinMarketCap.API],
['contentful', ContentFul.API],
['convertkit', ConvertKit.API],
['countapi', CountApi.API],
['courier', Courier.API],
['covalent', Covalent.API],
['deepl', DeepL.API],
['dhl', Dhl.API],
['disify', Disify.API],
['etherscan', Etherscan.API],
['eventbrite', Eventbrite.API],
['fauna', Fauna.API],
['frankfurter', Frankfurter.API],
['github', Github.API],
['grist', Grist.API],
['hackernews', HackerNews.API],
['harvest', Harvest.API],
['hellosign', HelloSign.API],
['hostio', HostIo.API],
['hubspot', Hubspot.API],
['hunterio', HunterIo.API],
['jira', Jira.API],
['linear', Linear.API],
['mailcheckai', MailCheckAi.API],
['mailersend', MailerSend.API],
['mailpace', MailPace.API],
['medium', Medium.API],
['mergent', Mergent.API],
['mezmo', Mezmo.API],
['microdev', MicroDev.API],
['mixpanel', Mixpanel.API],
['newrelic', NewRelic.API],
['notion', Notion.API],
['1inch', OneInch.API],
['openlibrary', OpenLibrary.API],
['opensea', OpenSea.API],
['ortto', Ortto.API],
['paypal', PayPal.API],
['personio', Personio.API],
['pinata', Pinata.API],
['purgomalum', PurgoMalum.API],
['rapidapi', RapidApi.API],
['rediscloud', RedisCloud.API],
['remoteok', RemoteOk.API],
['removebg', RemoveBg.API],
['sendgrid', SendGrid.API],
['sentry', Sentry.API],
['serpstack', SerpStack.API],
['shortcut', Shortcut.API],
['slack', Slack.API],
['statically', Statically.API],
['supabase', Supabase.API],
['thegraph', TheGraph.API],
['trello', Trello.API],
['tribe', Tribe.API],
['typeform', Typeform.API],
['up42', Up42.API],
['useplunk', UsePlunk.API],
['web3storage', Web3Storage.API],
['whoisxmlapi', WhoIsXMLApi.API],
['0x', ZeroX.API],
['zora', Zora.API],
])