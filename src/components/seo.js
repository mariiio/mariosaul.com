import React from "react"
import { Helmet } from 'react-helmet';

export function SEO({
  title = "Mario Saul | It's-a me!",
  description = 'Mario Saul is a Software Engineer, web developer, and tech enthusiast. Get to know him!',
  url = 'https://mariosaul.com/',
  image = 'https://avatars.githubusercontent.com/u/14424870'
}) {

  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:type" content='website' />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta
        name="twitter:widgets:theme"
      />
      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@mariiio" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
