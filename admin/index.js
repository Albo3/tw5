window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "albo3/tw5",
      branch: "main",
      base_url: "https://api.github.com",
      auth_endpoint: "auth",
    },
    media_folder: "assetsP/images/uploads",
    public_folder: "/assetsP/images/uploads",
    collections: [
      {
        name: "pages",
        label: "Pages",
        files: [
          {
            name: "index",
            label: "Home Page",
            file: "index.html",
            fields: [
              {
                label: "Layout",
                name: "layout",
                widget: "hidden",
                default: "default",
              },
              { label: "Title", name: "title", widget: "string" },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
          {
            name: "about",
            label: "About Page",
            file: "about.html",
            fields: [
              {
                label: "Layout",
                name: "layout",
                widget: "hidden",
                default: "default",
              },
              { label: "Title", name: "title", widget: "string" },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    ],
  },
});
