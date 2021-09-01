import React from "react"
import { Helmet } from "react-helmet"

export function SEO({
  title = "Mario Saul | Personal Website",
  description = "Mario Saul is a Software Engineer, Web Developer and tech enthusiast. Get to know him!",
  url = "https://mariosaul.com/",
  image = "https://user-images.githubusercontent.com/14424870/123155707-1b56d300-d471-11eb-9ec0-c3217435788f.png",
}) {
  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:widgets:theme" />
      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@mariiio" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
