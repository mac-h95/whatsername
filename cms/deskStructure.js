import S from "@sanity/desk-tool/structure-builder";
import SeoPane from "sanity-plugin-seo-pane";

import {
  BiCalendarEvent,
  BiCamera,
  BiCartAlt,
  BiCog,
  BiEnvelope,
  BiGroup,
  BiKey,
  BiHome,
  BiInfoCircle,
  BiMovie,
  BiNews,
  BiNotepad,
  BiPhotoAlbum
} from "react-icons/bi";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(BiCog)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.listItem()
        .title("Home Page")
        .icon(BiHome)
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("About")
        .icon(BiInfoCircle)
        .child(
          S.list()
            .title("About")
            .items([
              S.listItem()
                .title("Page Info")
                .icon(BiNotepad)
                .schemaType("aboutPage")
                .child(
                  S.document().schemaType("aboutPage").documentId("aboutPage")
                ),
              S.listItem()
                .title("Team Members")
                .icon(BiGroup)
                .schemaType("member")
                .child(S.documentTypeList("member").title("Team Members")),
              S.listItem()
                .title("Call to Action")
                .icon(BiMovie)
                .schemaType("cta")
                .child(S.document().schemaType("cta").documentId("cta"))
            ])
        ),
      S.listItem()
        .title("Events")
        .icon(BiCalendarEvent)
        .child(
          S.list()
            .title("Events")
            .items([
              S.listItem()
                .title("Page Info")
                .icon(BiNotepad)
                .schemaType("eventsPage")
                .child(
                  S.document().schemaType("eventsPage").documentId("eventsPage")
                ),
              S.listItem()
                .title("Events")
                .icon(BiCalendarEvent)
                .schemaType("event")
                .child(S.documentTypeList("event").title("Events"))
            ])
        ),
      S.listItem()
        .title("Media")
        .icon(BiCamera)
        .child(
          S.list()
            .title("Media")
            .items([
              S.listItem()
                .title("Page Info")
                .icon(BiNotepad)
                .child(
                  S.document().schemaType("mediaPage").documentId("mediaPage")
                ),
              S.listItem()
                .title("Photo Albums")
                .icon(BiPhotoAlbum)
                .schemaType("album")
                .child(S.documentTypeList("album").title("Photo Albums"))
            ])
        ),
      S.listItem()
        .title("Blog")
        .icon(BiNews)
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Page Info")
                .icon(BiNotepad)
                .child(
                  S.document().schemaType("blogPage").documentId("blogPage")
                ),
              S.listItem()
                .title("Blog Posts")
                .icon(BiNews)
                .schemaType("post")
                .child(S.documentTypeList("post").title("Blog Posts"))
            ])
        ),
      S.listItem()
        .title("Shop")
        .icon(BiCartAlt)
        .child(S.document().schemaType("shopPage").documentId("shopPage")),
      S.listItem()
        .title("Contact")
        .icon(BiEnvelope)
        .child(
          S.document().schemaType("contactPage").documentId("contactPage")
        ),
      S.listItem()
        .title("Keywords")
        .icon(BiKey)
        .schemaType("keyword")
        .child(S.documentTypeList("keyword").title("Keywords")),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "homePage",
            "aboutPage",
            "member",
            "cta",
            "event",
            "eventsPage",
            "keyword",
            "link",
            "mediaPage",
            "album",
            "blogPage",
            "post",
            "shopPage",
            "contactPage",
            "photographer",
            "albumImage",
            "venue"
          ].includes(listItem.getId())
      )
    ]);
