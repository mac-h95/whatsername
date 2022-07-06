import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import {
  aboutPage,
  album,
  blogPage,
  contactPage,
  cta,
  event,
  eventsPage,
  homePage,
  keyword,
  link,
  mediaPage,
  member,
  photo,
  photographer,
  post,
  pronoun,
  shopPage,
  product,
  category,
  option,
  order,
  customer,
  siteSettings,
  venue
} from './types'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Website settings
    siteSettings,
    // Pages
    homePage,
    aboutPage,
    eventsPage,
    mediaPage,
    blogPage,
    shopPage,
    contactPage,
    // Team members
    member,
    pronoun,
    // Events
    event,
    venue,
    // Media
    album,
    photographer,
    photo,
    // Blog
    post,
    // Store
    product,
    category,
    option,
    order,
    customer,
    // Utility
    keyword,
    link,
    cta
  ])
})
